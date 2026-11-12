import {renderMermaidASCII} from "beautiful-mermaid";
import {buildSkillPaths, isBuildableSkill, listSkillNames} from "./config.js";
import {readSkillRules} from "./parser.js";
import {parseRuleBody} from "./rule-body.js";

// ----------------------------------------------------------------------------------------
// 사이트 본문에서 가로 스크롤 없이 읽히는 문자 격자 폭 상한
//
// 상한을 넘으면 흐름도가 본문 밖으로 넘친다.
// ----------------------------------------------------------------------------------------
export const maxDiagramColumns = 125;

// ----------------------------------------------------------------------------------------
// 규칙 하나의 mermaid 펜스 하나를 격자로 그린 결과
//
//   ruleId
//      규칙 파일 이름이다.
//
//   index
//      규칙 안 mermaid 펜스 순번이고 0부터 센다.
//
//   error
//      렌더 실패 같은 오류 메시지이고 있으면 columns와 rows는 0이다.
// ----------------------------------------------------------------------------------------
export interface DiagramReport {
	skill: string;
	ruleId: string;
	index: number;
	columns: number;
	rows: number;
	error?: string;
}

// ----------------------------------------------------------------------------------------
// 사이트와 같은 격자 렌더러로 그린 결과
//
// 한글은 전각이라 폭 0 문자를 덧붙여 두 칸을 확보한다.
// ----------------------------------------------------------------------------------------
const wideCharacter = /[ᄀ-ᇿ　-〿㄰-㆏가-힯一-鿿぀-ヿ＀-｠]/g;
const widenCjk = (source: string): string => source.replace(wideCharacter, (character) => `${character}​`);

export const checkDiagrams = async (): Promise<DiagramReport[]> => {
	const reports: DiagramReport[] = [];

	for (const skillName of await listSkillNames()) {
		if (!(await isBuildableSkill(skillName))) {
			continue;
		}

		for (const rule of await readSkillRules(buildSkillPaths(skillName))) {
			const fences = parseRuleBody(rule.body).prose.filter((node) => node.type === "code" && node.lang === "mermaid");

			fences.forEach((fence, index) => {
				if (fence.type !== "code") return;

				// 격자 렌더러는 라벨 안 괄호에서 글을 자르므로 라벨에 괄호가 있으면 오류로 본다.
				const parenthesizedLabel = [...fence.code.matchAll(/(?<=[[({])"([^"\n]*)"/g)].find((match) => /[()]/.test(match[1] ?? ""));

				if (parenthesizedLabel) {
					reports.push({
						skill: skillName,
						ruleId: rule.fileName,
						index,
						columns: 0,
						rows: 0,
						error: `라벨에 괄호: ${parenthesizedLabel[0]}`,
					});
					return;
				}

				try {
					const grid = renderMermaidASCII(widenCjk(fence.code), {paddingX: 3, paddingY: 2, boxBorderPadding: 1, colorMode: "none"});
					const lines = grid.replace(/\s+$/, "").split("\n");
					reports.push({
						skill: skillName,
						ruleId: rule.fileName,
						index,
						columns: Math.max(...lines.map((line) => line.length)),
						rows: lines.length,
					});
				} catch (error) {
					reports.push({
						skill: skillName,
						ruleId: rule.fileName,
						index,
						columns: 0,
						rows: 0,
						error: error instanceof Error ? error.message : String(error),
					});
				}
			});
		}
	}

	return reports;
};
