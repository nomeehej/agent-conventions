import {readFileSync} from "node:fs";
import path from "node:path";

// ----------------------------------------------------------------------------------------
// 규칙 본문의 스니펫 줄
//
// for-humanity와 같은 `<<< ./path.ext#region 메타` 문법이다.
// ----------------------------------------------------------------------------------------
export const snippetLinePattern = /^<<<\s+(\S+?)(?:#([\w-]+))?(?:\s+(.+?))?\s*$/;

// ----------------------------------------------------------------------------------------
// 파일 안의 region 표시 줄
//
// 주석 모양은 자유다.
// ----------------------------------------------------------------------------------------
const regionLinePattern = /^\s*\S*\s*#(?:end)?region\s+[\w-]+/;

// ----------------------------------------------------------------------------------------
// Shiki 줄 표기만 있는 주석 줄
//
// JSX 자식 자리의 중괄호로 감싼 블록 주석 꼴도 포함한다.
//
// 사람용 사이트에서만 뜻이 있으므로 에이전트 산출물에서는 지운다.
// ----------------------------------------------------------------------------------------
const notationOnlyLinePattern = /^\s*\{?\s*(?:\/\/|#|\/\*|<!--)\s*\[!code [^\]]*\]\s*(?:\*\/|-->)?\s*\}?\s*$/;

const notationSuffixPattern = /\s*(?:(?:\/\/|#)\s*\[!code [^\]]*\]|\/\*\s*\[!code [^\]]*\]\s*\*\/)\s*$/;

// ----------------------------------------------------------------------------------------
// 확장자와 다른 펜스 언어 이름
//
// 나머지는 확장자를 그대로 쓴다.
// ----------------------------------------------------------------------------------------
const fenceLanguageByExtension: Record<string, string> = {".mjs": "js", ".cjs": "js", ".mts": "ts", ".yml": "yaml"};

// ----------------------------------------------------------------------------------------
// 스니펫 줄 하나를 읽은 결과
//
//   reference
//      규칙 파일 기준 상대 경로이고 원문 그대로다.
//
//   meta
//      펜스 메타 원문이고 없으면 빈 문자열이다.
// ----------------------------------------------------------------------------------------
export interface Snippet {
	reference: string;
	filePath: string;
	meta: string;
}

export const fenceLanguageOf = (filePath: string): string => {
	const extension = path.extname(filePath).toLowerCase();

	return fenceLanguageByExtension[extension] ?? extension.slice(1);
};

export const toFenceBody = (source: string): string => {
	const lines = source
		.replace(/\r\n/g, "\n")
		.split("\n")
		.filter((line) => !regionLinePattern.test(line) && !notationOnlyLinePattern.test(line))
		.map((line) => line.replace(notationSuffixPattern, ""));

	while (lines.length > 0 && (lines.at(-1) ?? "").trim() === "") {
		lines.pop();
	}

	return lines.join("\n");
};

// ----------------------------------------------------------------------------------------
// 본문이 품은 백틱 묶음보다 한 칸 긴 펜스
//
// Mermaid 펜스가 든 Markdown 예제도 한 블록으로 묶인다.
// ----------------------------------------------------------------------------------------
export const toFenceMarker = (code: string): string => {
	const longest = Math.max(2, ...[...code.matchAll(/`{3,}/g)].map((match) => match[0].length));

	return "`".repeat(longest + 1);
};

// ----------------------------------------------------------------------------------------
// 본문의 `<<<` 줄을 코드 펜스로 바꾸는 치환
//
// 없는 파일은 오류이고 코드 펜스 안은 건드리지 않는다.
//
// 규칙 산출물(계약, 인덱스, 검사)은 전부 이 결과를 보므로 예제를 파일로 옮겨도 산출물은
// 그대로다.
// ----------------------------------------------------------------------------------------
export const inlineSnippets = (body: string, baseDir: string): {body: string; snippets: Snippet[]} => {
	const out: string[] = [];
	const snippets: Snippet[] = [];
	let inFence = false;

	for (const line of body.split("\n")) {
		if (line.startsWith("```")) {
			inFence = !inFence;
			out.push(line);
			continue;
		}

		const match = inFence ? null : snippetLinePattern.exec(line);

		if (match === null) {
			out.push(line);
			continue;
		}

		const [, reference = "", , meta = ""] = match;
		const filePath = path.resolve(baseDir, reference);
		let source: string;

		try {
			source = readFileSync(filePath, "utf8");
		} catch {
			throw new Error(`Snippet "${reference}" does not exist (resolved to ${filePath}).`);
		}

		snippets.push({reference, filePath, meta});

		const code = toFenceBody(source);
		const fence = toFenceMarker(code);

		out.push(`${fence}${fenceLanguageOf(filePath)}`, code, fence);
	}

	return {body: out.join("\n"), snippets};
};
