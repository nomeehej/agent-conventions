// ----------------------------------------------------------------------------------------
// 코드 펜스를 여닫는 표시
//
// 언어 이름은 이 길이만큼 잘라 낸 나머지다.
// ----------------------------------------------------------------------------------------
const fenceMarker = "```";

// ----------------------------------------------------------------------------------------
// 규칙 본문 코드 블록 하나
//
//   lang
//      코드 펜스에 적힌 언어이고 없으면 "text"다.
// ----------------------------------------------------------------------------------------
export interface RuleCodeBlock {
	lang: string;
	code: string;
}

// ----------------------------------------------------------------------------------------
// Incorrect 또는 Correct 라벨 하나와 딸린 코드 블록 묶음
//
//   label
//      라벨 괄호 안 부연 설명이고 없으면 빈 문자열이다.
//
//   pair
//      짝 번호다(`**Incorrect 1**`과 `**Correct 1**`). 없으면 홀로 선 예시다.
// ----------------------------------------------------------------------------------------
export interface RuleExample {
	kind: "incorrect" | "correct";
	label: string;
	blocks: RuleCodeBlock[];
	pair?: number;
}

export type RuleProseNode = {type: "line"; text: string} | {type: "code"; lang: string; code: string};

// ----------------------------------------------------------------------------------------
// 규칙 본문 분해 결과
//
//   prose
//      첫 예시 이전 산문이고 표와 코드 블록을 포함한다.
//
//   examples
//      문서 순서를 유지한 예시 목록이다.
// ----------------------------------------------------------------------------------------
export interface ParsedRuleBody {
	prose: RuleProseNode[];
	examples: RuleExample[];
}

// ----------------------------------------------------------------------------------------
// 예시 라벨의 괄호 설명
//
// 마지막 `)`까지 greedy로 매칭한다. `clsx()`, `:is()`처럼 괄호가 들어가는 라벨이 있기
// 때문이다.
//
// `[^)]*`를 쓰면 첫 `)`에서 끊겨 라벨을 못 찾고 예시가 앞 카드에 병합된다.
// ----------------------------------------------------------------------------------------
const examplePattern = /^\*\*(Incorrect|Correct)(?:\s+(\d+))?\s*(?:\((.+)\))?\s*:?\*\*/;

const stripLeadingHeading = (prose: RuleProseNode[]): RuleProseNode[] => {
	let headingDropped = false;

	return prose.filter((node) => {
		if (node.type !== "line") return true;

		if (!headingDropped && node.text.startsWith("## ")) {
			headingDropped = true;
			return false;
		}

		return !node.text.startsWith("**Impact:");
	});
};

const trimBlankEdges = (prose: RuleProseNode[]): RuleProseNode[] => {
	const isBlank = (node: RuleProseNode): boolean => node.type === "line" && node.text.trim() === "";
	let start = 0;
	let end = prose.length;

	while (start < end && isBlank(prose[start] as RuleProseNode)) {
		start += 1;
	}

	while (end > start && isBlank(prose[end - 1] as RuleProseNode)) {
		end -= 1;
	}

	return prose.slice(start, end);
};

export const parseRuleBody = (body: string): ParsedRuleBody => {
	const lines = body.replace(/\r\n/g, "\n").split("\n");
	const prose: RuleProseNode[] = [];
	const examples: RuleExample[] = [];
	let current: RuleExample | undefined;
	let index = 0;

	while (index < lines.length) {
		const line = lines[index] ?? "";
		const matched = examplePattern.exec(line);

		if (matched) {
			current = {kind: matched[1] === "Incorrect" ? "incorrect" : "correct", label: (matched[3] ?? "").trim(), blocks: []};

			if (matched[2] !== undefined) {
				current.pair = Number(matched[2]);
			}

			examples.push(current);
			index += 1;
			continue;
		}

		if (line.startsWith(fenceMarker)) {
			// 여는 펜스 길이 이상의 백틱만 닫는 펜스이고 안쪽의 더 짧은 펜스는 코드다.
			const opener = /^`+/.exec(line)?.[0] ?? fenceMarker;
			const lang = line.slice(opener.length).trim() || "text";
			const buffer: string[] = [];
			index += 1;

			while (index < lines.length && !new RegExp(`^\`{${opener.length},}\\s*$`).test(lines[index] ?? "")) {
				buffer.push(lines[index] ?? "");
				index += 1;
			}

			const block = {lang, code: buffer.join("\n")};

			if (current === undefined) {
				prose.push({type: "code", ...block});
			} else {
				current.blocks.push(block);
			}

			index += 1;
			continue;
		}

		if (current === undefined) {
			prose.push({type: "line", text: line});
		}

		index += 1;
	}

	return {prose: trimBlankEdges(stripLeadingHeading(prose)), examples};
};
