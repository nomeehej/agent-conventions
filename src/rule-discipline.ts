import {parseRuleBody} from "./rule-body.js";
import type {RuleExample} from "./rule-body.js";
import type {LoadedSkillDocument, SkillRule} from "./types.js";

// ----------------------------------------------------------------------------------------
// 한글을 두 칸으로 세는 최대 산문 폭, `.editorconfig`의 `max_line_length`와 같아야 함
// ----------------------------------------------------------------------------------------
const maxProseWidth = 120;

// ----------------------------------------------------------------------------------------
// 위반 메시지에 싣는 원문 길이, 어느 줄인지 알아볼 만큼만
// ----------------------------------------------------------------------------------------
const violationExcerptLength = 40;

// ----------------------------------------------------------------------------------------
// 인덴트를 탭으로 강제하는 코드 펜스 언어, `text`, `md`는 디렉터리 트리와 목록이라 공백
// ----------------------------------------------------------------------------------------
const tabIndentedFenceLanguages = new Set(["ts", "tsx", "css", "js", "json"]);

// ----------------------------------------------------------------------------------------
// 이 저장소가 지어냈던 역어와 그 대체어
//
// 기준: MDN, React, TypeScript 한국어 문서에 역어가 있으면 그것, 없으면 통용 외래어
// 저장소 밖 어디에도 없는 말이면 그 낱말로 검색해도 규칙을 못 찾음
// `쌓임 맥락`, `단언`, `좁히기`는 표준 역어라 목록에 없음
// ----------------------------------------------------------------------------------------
const bannedTerms: ReadonlyArray<readonly [string, string]> = [
	["분기점", "브레이크포인트"],
	["감속 곡선", "이징"],
	["쌓임 층", "`z-index` 층"],
	["스스로 접히는", "고유 크기"],
	["내재적 크기", "고유 크기"],
	["암묵적", "암시적"],
	["겨냥", "선택자로 잡는다"],
	["DOM 표면", "DOM 속성"],
	["창구", "주입 지점 또는 계약"],
	["지역 사용자 정의 속성", "지역 변수"],
	["화면 낭독기", "스크린 리더"],
	["머리말", "헤더"],
	["꼬리말", "푸터"],
	["늦춘 값", "지연 값"],
	["갱신자", "업데이터"],
	["사용자 동작", "사용자 액션"],
	["검색 매개변수", "search 파라미터"],
	["읽히는 이름", "접근 가능한 이름"],
	["리액트 Query", "React Query"],
	["재대입", "재할당"],
	["미사용 매개변수", "쓰지 않는 매개변수"],
	["써드파티", "서드파티"],
	["비-널", "`null` 아님"],
	["값 묶음", "값 집합"],
	["가름", "부분"],
	["열쇠말", "항목 이름"],
	["캡처에 굽", "캡처에 그려 넣"],
	["쥡니다", "둡니다"],
	["기대는 앞 단계", "선행 단계"],
];

// ----------------------------------------------------------------------------------------
// 받침 유무로 갈리는 조사 짝, 같은 식별자가 파일마다 다른 쪽을 쓰면 둘 중 하나가 틀림
// ----------------------------------------------------------------------------------------
const josaPairs = [
	["이", "가"],
	["은", "는"],
	["을", "를"],
	["과", "와"],
] as const;

// ----------------------------------------------------------------------------------------
// 백틱으로 감싼 규칙 ID, 식별자와 바로 뒤에 붙은 조사
// ----------------------------------------------------------------------------------------
const backtickedIdentifierJosa = /`([a-z][a-z0-9/-]{6,})`(이|가|은|는|을|를|과|와)(?![가-힣])/g;

// ----------------------------------------------------------------------------------------
// 이름 붙여 선언한 화살표 함수와 `=>` 뒤에 남은 꼬리
//
// 꼬리가 비면 다음 줄로 이어지는 선언, `{`로 시작하면 블록 본문
// ----------------------------------------------------------------------------------------
const namedArrowBody = /^\s*(?:export\s+)?const\s+\w+(?:\s*:\s*[^=]+?)?\s*=\s*(?:async\s+)?\([^)]*\)(?:\s*:\s*[^=]+?)?\s*=>\s*(.*)$/;

// ----------------------------------------------------------------------------------------
// 커링의 바깥 화살표, 안쪽 함수를 그대로 돌려주는 자리라 블록 본문 불필요
// ----------------------------------------------------------------------------------------
const curriedTail = /^\([^)]*\)(?:\s*:\s*[^=]+?)?\s*=>/;

// ----------------------------------------------------------------------------------------
// 객체 리터럴의 메서드 축약형, `this`가 묶여 떼어 내면 동작이 달라짐
// ----------------------------------------------------------------------------------------
const objectLiteralMethod = /^\t+[a-z]\w*\([^)]*\)\s*(?::\s*[^{]+?)?\s*\{\s*$/;

// ----------------------------------------------------------------------------------------
// 결과를 말하지 않는 첫 동사, `functions-name-functions-by-what-comes-out`의 금지 목록
//
// 호출은 보지 않고 우리가 짓는 선언 이름만 검사 → 외부 `createClient()`는 그대로 사용
// ----------------------------------------------------------------------------------------
const emptyVerbDeclaration = /^\s*(?:export\s+)?const\s+(build|create|make|process|manage|do|perform|execute|filter)[A-Z]/;

// ----------------------------------------------------------------------------------------
// 상대경로 가져오기, 예제의 규범 위반 방지
// ----------------------------------------------------------------------------------------
const relativeImport = /^\s*import\s[^"']*["']\.\.?\//;

// ----------------------------------------------------------------------------------------
// 선언 좌변의 객체 구조분해, `const [a, b] =` 같은 배열, 튜플은 제외
// ----------------------------------------------------------------------------------------
const objectDestructuringDeclaration = /^\s*(?:const|let|var)\s*\{/;

// ----------------------------------------------------------------------------------------
// 매개변수 자리의 객체 구조분해, `({a, b}: T)`와 `({a, b})` 둘 다 검사
// ----------------------------------------------------------------------------------------
const objectDestructuringParameter = /=\s*(?:async\s*)?\(\s*\{[^}]*\}\s*(?::|\))/;

// ----------------------------------------------------------------------------------------
// 누르는 요소가 아닌 태그에 단 `onClick`
//
// `a11y-give-interactive-elements-an-accessible-name`이 `button` 요구
// ----------------------------------------------------------------------------------------
const nonButtonClick = /<(?:li|div|span|td|tr|section|article)\b[^>]*\bonClick=/;

// ----------------------------------------------------------------------------------------
// `??`, `||` 오른쪽의 리터럴
//
// `absence-expose-optional-values-instead-of-silent-fallbacks`가 선언된 이름만 허용
// ----------------------------------------------------------------------------------------
const literalFallback = /(?:\?\?|\|\|)\s*(?:"[^"]*"|'[^']*'|\d+(?:\.\d+)?|\[\]|\{\})/;

// ----------------------------------------------------------------------------------------
// 손으로 쓴 값 보조, es-toolkit 요구
//
// values-use-es-toolkit-for-value-helpers, values-prefer-immutable-array-sorting이 근거
// `.toSorted(`는 키로 못 적는 비교에 허용되므로 `.sort(`만 검출
// ----------------------------------------------------------------------------------------
const handRolledValueHelper = /(?<!to)\.sort\(|\.reduce\(|Array\.from\(new Set|\[\.\.\.new Set/;

// ----------------------------------------------------------------------------------------
// 블록 주석 `/*`, 줄 표기 마커(`[!code …]`)에만 허용
//
// TypeScript, TSX 주석은 `//` 줄 주석만 씀
// ----------------------------------------------------------------------------------------
const blockComment = /\/\*(?!\s*\[!code [^\]]+\]\s*\*\/)/;

// ----------------------------------------------------------------------------------------
// 한 줄 안의 문자열 리터럴, 비워서 주석 검사에서 제외
//
// `"**/api/**"` 같은 글롭을 주석으로 보지 않게 함
// ----------------------------------------------------------------------------------------
const stringLiteral = /"(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*'|`(?:[^`\\]|\\.)*`/g;

// ----------------------------------------------------------------------------------------
// 주석 상자의 위아래 줄, `// ` 뒤 대시 88개
// ----------------------------------------------------------------------------------------
const boxRule = /^\s*\/\/ -+$/;

// ----------------------------------------------------------------------------------------
// 주석 상자 줄의 대시 개수, 91칸
// ----------------------------------------------------------------------------------------
const boxRuleDashes = 88;

// ----------------------------------------------------------------------------------------
// CSS 주석 상자의 위아래 줄, `/* ` 뒤 대시 85개와 ` */`
// ----------------------------------------------------------------------------------------
const cssBoxRule = /^\s*\/\* -+ \*\/$/;

// ----------------------------------------------------------------------------------------
// CSS 주석 상자 줄의 대시 개수, 91칸
// ----------------------------------------------------------------------------------------
const cssBoxRuleDashes = 85;

const countBoxDashes = (line: string): number => /-+/.exec(line)?.[0].length ?? 0;

// ----------------------------------------------------------------------------------------
// 줄 표기 마커만 있는 줄, 표시할 줄 바로 위에 붙어 앞 줄 검사에서 건너뜀
// ----------------------------------------------------------------------------------------
const codeMarkerLine = /^\s*(?:\/\/|\{\/\*)\s*\[!code [^\]]+\]/;

// ----------------------------------------------------------------------------------------
// 주석 상자 안 줄의 최대 폭, 위아래 줄(`// ` + 대시 88개)과 같은 91칸, 한글은 2칸
// ----------------------------------------------------------------------------------------
const boxContentWidth = 91;

// ----------------------------------------------------------------------------------------
// 블록이 열리는 줄의 끝, 상자가 블록 첫 줄이면 위에 빈 줄을 두지 않음
// ----------------------------------------------------------------------------------------
const blockOpening = /(?:[{([]|=>)$/;

const emptyCommentLine = /^\s*\/\/\s*$/;

// ----------------------------------------------------------------------------------------
// JSX 요소 둘을 고르는 삼항
//
// `composition-render-one-branch-with-and`가 `&&` 두 줄 요구
// ----------------------------------------------------------------------------------------
const jsxBranchTernary = /\?\s*\(\n[\s\S]*?\n\s*\)\s*:\s*\(/;

// ----------------------------------------------------------------------------------------
// 공통 토큰에 붙인 대체값
//
// `values-fall-back-only-outside-core-tokens`가 `--app-*`에는 대체값 금지
// ----------------------------------------------------------------------------------------
const coreTokenFallback = /var\(--app-[a-z0-9-]+\s*,/;

// ----------------------------------------------------------------------------------------
// 예제 스택 밖 라이브러리 이름, Testing의 Kubb 생성 계약은 허용 스택
// ----------------------------------------------------------------------------------------
const foreignStackTerms = ["ag-grid", "echarts", "EChartsType", "antd", "zod", "dataSource=", "treeData=", "UploadFile"];

// ----------------------------------------------------------------------------------------
// 백틱 없는 라틴 낱말 뒤에 띄어 쓴 조사, 조사는 붙여 씀(맞춤법 제41항)
// ----------------------------------------------------------------------------------------
const spacedJosaAfterLatin = /(?<![`\w/-])[A-Za-z][A-Za-z0-9_-]+ (?:로|가|를|은|는|이|와|과|의|에|도|만)(?=[\s,.)])/;

// ----------------------------------------------------------------------------------------
// 터미널에서 두 칸을 차지하는 코드포인트 구간
//
// 각 경계가 아니라 표 전체가 하나의 뜻
// 출처는 Unicode East Asian Width의 Wide, Fullwidth 구간
// ----------------------------------------------------------------------------------------
const wideCodePointRanges = {
	hangulJamo: {first: 0x1100, last: 0x115f},
	cjk: {first: 0x2e80, last: 0xa4cf},
	hangulSyllable: {first: 0xac00, last: 0xd7a3},
	cjkCompatibility: {first: 0xf900, last: 0xfaff},
	verticalForm: {first: 0xfe30, last: 0xfe6f},
	fullwidthForm: {first: 0xff00, last: 0xff60},
	fullwidthSign: {first: 0xffe0, last: 0xffe6},
} as const;

// ----------------------------------------------------------------------------------------
// 한글, 전각 문자를 두 칸으로 센 표시 폭
//
// displayWidth("abc") → 3
// displayWidth("한글") → 4
// displayWidth("") → 0
// ----------------------------------------------------------------------------------------
const displayWidth = (text: string): number => {
	let width = 0;

	for (const character of text) {
		const codePoint = character.codePointAt(0) ?? 0;
		const isWide = Object.values(wideCodePointRanges).some((range) => {
			return codePoint >= range.first && codePoint <= range.last;
		});
		width += isWide ? 2 : 1;
	}

	return width;
};

// ----------------------------------------------------------------------------------------
// 주석 상자의 모양 위반
//
// 위아래 줄 짝, 상자 위 빈 줄, 안쪽 줄 폭, 요약 줄로 시작, 상자 바로 아래 코드
// ----------------------------------------------------------------------------------------
const findBoxViolations = (lines: readonly string[]): string[] => {
	const violations: string[] = [];
	const ruleIndexes = lines.flatMap((line, index) => (boxRule.test(line) ? [index] : []));

	if (ruleIndexes.length % 2 !== 0) {
		violations.push("Correct 예제의 주석 상자는 위아래 대시 줄이 짝을 이룬다");
	}

	for (let pair = 0; pair + 1 < ruleIndexes.length; pair += 2) {
		const open = ruleIndexes[pair] ?? 0;
		const close = ruleIndexes[pair + 1] ?? 0;
		const above = lines
			.slice(0, open)
			.reverse()
			.find((candidate) => !codeMarkerLine.test(candidate));
		const inside = lines.slice(open + 1, close);
		const below = lines[close + 1];

		if (above !== undefined && above.trim() !== "" && !blockOpening.test(above.trim())) {
			violations.push(`Correct 예제의 주석 상자 위에는 빈 줄을 둔다(블록 첫 줄 제외): "${above.trim().slice(0, violationExcerptLength)}"`);
		}

		if (inside.length === 0 || emptyCommentLine.test(inside[0] ?? "") || emptyCommentLine.test(inside.at(-1) ?? "")) {
			violations.push("Correct 예제의 주석 상자는 요약 줄로 시작하고 빈 줄로 끝나지 않는다");
		}

		for (const content of inside) {
			if (!/^\s*\/\//.test(content)) {
				violations.push(`Correct 예제의 주석 상자 안은 // 줄만 둔다: "${content.trim().slice(0, violationExcerptLength)}"`);
			}

			if (displayWidth(content.trimStart()) > boxContentWidth) {
				violations.push(
					`Correct 예제의 주석 상자 안 줄은 ${boxContentWidth}칸 이하다: "${content.trim().slice(0, violationExcerptLength)}"`,
				);
			}
		}

		if (below !== undefined && below.trim() === "") {
			violations.push("Correct 예제의 주석 상자 바로 아래는 코드다");
		}
	}

	return violations;
};

// ----------------------------------------------------------------------------------------
// 규칙 하나의 오류 목록, 첫 위반에서 던지지 않고 한 번에 보여 줌
// ----------------------------------------------------------------------------------------
const collectRuleViolations = (rule: SkillRule): string[] => {
	const violations: string[] = [];
	const parsed = parseRuleBody(rule.body);

	for (const bullet of rule.appliesWhenBullets ?? []) {
		const trimmed = bullet.trim();

		if (trimmed.startsWith("제외:")) {
			if (!trimmed.endsWith("경우")) {
				violations.push(`appliesWhen 제외 불렛은 "경우"로 끝맺는다: "${trimmed}"`);
			}
		} else if (!trimmed.endsWith("때")) {
			violations.push(`appliesWhen 불렛은 "때"로 끝맺는다: "${trimmed}"`);
		}
	}

	for (const node of parsed.prose) {
		if (node.type !== "line" || node.text.startsWith("|")) {
			continue;
		}

		if (displayWidth(node.text) > maxProseWidth) {
			violations.push(`산문 ${maxProseWidth}칸 초과(${displayWidth(node.text)}칸): "${node.text.slice(0, violationExcerptLength)}…"`);
		}
	}

	// ----------------------------------------------------------------------------------------
	// 라벨 괄호 설명은 끝맺음만 검사
	//
	// 사이트에서 예시 제목으로 서는 자리 → 명사 종결이 섞이면 목록이 끊겨 읽힘
	// 빈 라벨은 허용, 테스트 fixture는 다른 검사 확인용으로 라벨 없이 씀
	// ----------------------------------------------------------------------------------------
	for (const example of parsed.examples) {
		const label = example.label.trim();

		if (label !== "" && !label.endsWith("니다")) {
			violations.push(`예시 라벨은 합쇼체 "~니다"로 끝맺는다: "${label}"`);
		}
	}

	// ----------------------------------------------------------------------------------------
	// Incorrect를 앞에 모으라는 제약은 없음
	//
	// 같은 짝 번호의 `Incorrect`, `Correct`는 붙여 쓰는 편이 읽기 좋음
	// ----------------------------------------------------------------------------------------
	const pairSlots = new Map<number, Partial<Record<RuleExample["kind"], RuleExample>>>();

	for (const example of parsed.examples) {
		if (example.pair === undefined) {
			continue;
		}

		const slot = pairSlots.get(example.pair) ?? {};

		if (slot[example.kind] !== undefined) {
			violations.push(`짝 번호 ${example.pair}에 ${example.kind === "incorrect" ? "Incorrect" : "Correct"}가 둘이다`);
		}

		slot[example.kind] = example;
		pairSlots.set(example.pair, slot);
	}

	for (const [pairNumber, slot] of pairSlots) {
		const {incorrect, correct} = slot;

		if (incorrect === undefined || correct === undefined) {
			violations.push(`짝 번호 ${pairNumber}는 Incorrect 와 Correct 가 하나씩 있어야 한다`);
			continue;
		}

		// 블록 수는 달라도 됨. Correct 가 파일 여럿으로 나뉘는 짝이 있음. 겹치는 자리의 언어만 맞춤
		incorrect.blocks.forEach((block, index) => {
			const counterpart = correct.blocks[index];

			if (counterpart !== undefined && counterpart.lang !== block.lang) {
				violations.push(`짝 번호 ${pairNumber}의 ${index + 1}번째 블록 언어가 다르다(${block.lang}:${counterpart.lang})`);
			}
		});
	}

	// ----------------------------------------------------------------------------------------
	// 예시 차례는 짝(Incorrect n, Correct n이 붙어서) → 홀로 선 Incorrect → 홀로 선 Correct
	//
	// 사이트가 이 차례로 싣고 계약이 첫 짝을 실음
	// 같은 번호의 Incorrect, Correct가 짝
	// ----------------------------------------------------------------------------------------
	const exampleShape = (example: RuleExample): string => example.blocks.map((block) => block.lang).join("+");
	let phase = 0;
	let expectedPair = 1;

	parsed.examples.forEach((example, index) => {
		const next = parsed.examples[index + 1];

		if (example.pair !== undefined) {
			if (example.kind === "incorrect") {
				if (phase > 0) {
					violations.push(`짝 ${example.pair}는 홀로 선 예시보다 앞에 온다`);
				}

				if (example.pair !== expectedPair) {
					violations.push(`짝 번호는 1부터 차례로 붙인다(${expectedPair} 자리에 ${example.pair})`);
				}

				if (next === undefined || next.kind !== "correct" || next.pair !== example.pair) {
					violations.push(`Incorrect ${example.pair} 바로 뒤에 Correct ${example.pair}가 와야 한다`);
				}

				expectedPair = example.pair + 1;
			}

			return;
		}

		if (example.kind === "incorrect") {
			if (phase > 1) {
				violations.push("홀로 선 Incorrect 는 홀로 선 Correct 보다 앞에 온다");
			}

			phase = 1;

			if (next !== undefined && next.kind === "correct" && next.pair === undefined && exampleShape(next) === exampleShape(example)) {
				violations.push(`모양이 같은 Incorrect, Correct 가 붙어 있으면 짝 번호를 단다(${index + 1}번째 예시)`);
			}

			return;
		}

		phase = 2;
	});

	for (const example of parsed.examples) {
		for (const block of example.blocks) {
			if (tabIndentedFenceLanguages.has(block.lang)) {
				const spaceIndented = block.code.split("\n").filter((line) => line.startsWith(" ") && !/^ \*/.test(line));

				if (spaceIndented.length > 0) {
					violations.push(`코드 펜스 인덴트는 탭이다(${block.lang}, ${spaceIndented.length}줄)`);
				}
			}

			if (example.kind === "correct" && block.lang === "css") {
				if (coreTokenFallback.test(block.code)) {
					violations.push("Correct 예제는 공통 토큰 `--app-*`에 대체값을 두지 않는다");
				}

				for (const line of block.code.split("\n")) {
					if (/\/\*/.test(line) && !/\*\//.test(line)) {
						violations.push(`Correct 예제의 CSS 주석은 줄마다 /* */로 닫는다: "${line.trim().slice(0, violationExcerptLength)}"`);
					}

					if (cssBoxRule.test(line) && countBoxDashes(line) !== cssBoxRuleDashes) {
						violations.push(`Correct 예제의 CSS 주석 상자 줄은 /* 뒤 대시 ${cssBoxRuleDashes}개다`);
					}
				}

				const mediaIndex = block.code.indexOf("@media");

				if (mediaIndex >= 0 && block.code.slice(mediaIndex).includes("&:hover")) {
					violations.push("Correct 예제의 `&:hover`는 `@media` 안이 아니라 기본 블록에 둔다");
				}
			}

			if (example.kind !== "correct" || (block.lang !== "ts" && block.lang !== "tsx")) {
				continue;
			}

			// 클래스 메서드는 축약형이 규범이라 클래스가 든 펜스에서는 축약형 검사 끔
			const hasClass = /^\s*(?:export\s+)?(?:abstract\s+)?class\s/m.test(block.code);

			if (block.code.includes("mutateAsync") && !/\btry\s*\{/.test(block.code)) {
				violations.push("Correct 예제의 `mutateAsync`는 `try`/`catch`와 함께 쓴다");
			}

			if (jsxBranchTernary.test(block.code)) {
				violations.push("Correct 예제는 JSX 요소 둘을 삼항으로 고르지 않고 `&&` 두 줄로 적는다");
			}

			const lines = block.code.split("\n");

			violations.push(...findBoxViolations(lines));

			for (const line of lines) {
				if (nonButtonClick.test(line)) {
					violations.push(`Correct 예제에서 누르는 요소는 button 이다: "${line.trim()}"`);
				}

				if (literalFallback.test(line)) {
					violations.push(`Correct 예제의 \`??\`, \`||\` 오른쪽은 선언된 이름이다: "${line.trim()}"`);
				}

				if (handRolledValueHelper.test(line)) {
					violations.push(`Correct 예제의 값 보조는 es-toolkit(sortBy, sumBy, uniq)이다: "${line.trim()}"`);
				}

				if (blockComment.test(line.replace(stringLiteral, '""'))) {
					violations.push(`Correct 예제의 주석은 // 줄 주석이다. /* */, /** */, JSX {/* */}를 쓰지 않는다: "${line.trim()}"`);
				}

				if (boxRule.test(line) && countBoxDashes(line) !== boxRuleDashes) {
					violations.push(`Correct 예제의 주석 상자 줄은 // 뒤 대시 ${boxRuleDashes}개다`);
				}

				if (/^\s*(?:export\s+)?function\s/.test(line)) {
					violations.push(`Correct 예제는 함수를 화살표 const로 선언한다: "${line.trim()}"`);
				}

				const tail = namedArrowBody.exec(line)?.[1].trim() ?? "";

				if (tail.length > 0 && !tail.startsWith("{") && !curriedTail.test(tail)) {
					violations.push(`Correct 예제의 이름 붙인 함수는 {} 블록 본문이다: "${line.trim()}"`);
				}

				if (!hasClass && objectLiteralMethod.test(line)) {
					violations.push(`Correct 예제의 객체 멤버는 화살표 프로퍼티다: "${line.trim()}"`);
				}

				if (objectDestructuringDeclaration.test(line) || objectDestructuringParameter.test(line)) {
					violations.push(`Correct 예제는 객체를 구조분해하지 않고 체인으로 읽는다: "${line.trim()}"`);
				}

				const emptyVerb = emptyVerbDeclaration.exec(line);

				if (emptyVerb !== null) {
					violations.push(`Correct 예제의 함수 이름은 결과를 말한다. "${emptyVerb[1]}"는 첫 동사로 쓰지 않는다: "${line.trim()}"`);
				}

				if (line.includes('className="')) {
					violations.push(`Correct 예제의 className은 clsx()로 조립한다: "${line.trim()}"`);
				}

				if (line.includes("(props: {")) {
					violations.push(`Correct 예제의 프롭스 타입은 컴포넌트 위에 선언한다: "${line.trim()}"`);
				}

				// 스타일시트는 상대경로가 규범. `naming-import-by-absolute-path`도 `.css`만 예외
				if (relativeImport.test(line) && !line.includes(".css")) {
					violations.push(`Correct 예제의 가져오기는 절대경로다: "${line.trim()}"`);
				}
			}
		}
	}

	for (const [banned, replacement] of bannedTerms) {
		if (searchableText(rule).includes(banned)) {
			violations.push(`"${banned}"은 이 저장소만 쓰는 말이다. "${replacement}"로 쓴다`);
		}
	}

	for (const term of foreignStackTerms) {
		if (rule.body.includes(term)) {
			violations.push(`"${term}"은 예제 스택 밖 이름이다. @mui, react-query, es-toolkit 어휘로 바꾼다`);
		}
	}

	for (const node of parsed.prose) {
		if (node.type === "line" && spacedJosaAfterLatin.test(node.text)) {
			violations.push(`조사는 붙여 쓴다: "${node.text.slice(0, violationExcerptLength)}…"`);
		}
	}

	return violations;
};

// ----------------------------------------------------------------------------------------
// 금칙어 검사 대상 텍스트, 본문, 라우팅과 표시에 쓰이는 frontmatter 포함
// ----------------------------------------------------------------------------------------
const searchableText = (rule: SkillRule): string => {
	return [rule.titleKo, rule.impactDescription, ...(rule.appliesWhenBullets ?? []), rule.body].join("\n");
};

// ----------------------------------------------------------------------------------------
// 같은 백틱 식별자가 규칙마다 다른 조사를 단 경우 수집
//
// 받침은 식별자마다 하나라 표기가 갈리면 한쪽은 반드시 틀림
// 어느 쪽이 맞는지는 기계가 모르지만 갈렸다는 사실은 셀 수 있음
// ----------------------------------------------------------------------------------------
const collectJosaConflicts = (document: LoadedSkillDocument): string[] => {
	const seen = new Map<string, Map<string, string>>();
	const conflicts: string[] = [];

	for (const rule of document.rules) {
		for (const match of rule.body.matchAll(backtickedIdentifierJosa)) {
			const [, identifier, josa] = match;
			const byJosa = seen.get(identifier) ?? new Map<string, string>();
			byJosa.set(josa, rule.fileName);
			seen.set(identifier, byJosa);
		}
	}

	for (const [identifier, byJosa] of seen) {
		for (const pair of josaPairs) {
			const used = pair.filter((josa) => byJosa.has(josa));

			if (used.length > 1) {
				const where = used.map((josa) => `"${josa}"(${byJosa.get(josa)})`).join(" vs ");
				conflicts.push(`  \`${identifier}\` 뒤 조사가 갈린다: ${where}`);
			}
		}
	}

	return conflicts;
};

// ----------------------------------------------------------------------------------------
// 규칙 본문이 이 저장소가 정한 형식, 예제 규율을 지키는지 검증
//
// 문장 검토는 사람 몫, 기계가 셀 수 있는 것은 여기서 차단
// 표본만 본 검토가 위반 4곳을 지목했을 때 실제로는 13곳
// `Correct` 예제만 규칙 위반으로 봄 → `Incorrect`는 일부러 어기는 자리
// ----------------------------------------------------------------------------------------
export const assertRuleDiscipline = (document: LoadedSkillDocument): void => {
	const failures: string[] = [];

	for (const rule of document.rules) {
		for (const violation of collectRuleViolations(rule)) {
			failures.push(`  ${rule.fileName}: ${violation}`);
		}
	}

	failures.push(...collectJosaConflicts(document));

	if (failures.length > 0) {
		throw new Error(`${document.skillName}: rule discipline 위반 ${failures.length}건\n${failures.join("\n")}`);
	}
};
