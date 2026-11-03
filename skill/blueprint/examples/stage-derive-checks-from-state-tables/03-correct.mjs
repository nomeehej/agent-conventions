/**
 * 설계 문서 Scenarios 표와 Playwright 테스트 제목 대조
 *
 * 사용법: node script/blueprint/check-scenarios.mjs <문서> <테스트 폴더>
 *
 * - 행 = `| <a id="test-ord-001"></a>ORD-001 | Region | 문장 | tag | layer |`. 문장은 테스트 제목 `[ID] 문장`과 같은 글자, tag는 `<br>`로 줄마다 하나
 * - 어긋남: 한쪽에만 있는 ID, 문장, tag, layer(e2e, integration), 행 없는 `#test-` 링크
 */
import {readdirSync, readFileSync} from "node:fs";
import path from "node:path";

const [docPath, testDir] = process.argv.slice(2);
const doc = readFileSync(docPath, "utf8");
const docRows = new Map(
	[...doc.matchAll(/^\| <a id="test-[a-z]+-\d+"><\/a>([A-Z]+-\d+) \| .+? \| (.+) \| ([a-z<>]+) \| (e2e|integration) \|$/gm)].map((match) => [
		match[1],
		{title: match[2], tags: match[3].replaceAll("<br>", ", "), layer: match[4]},
	]),
);
const testRows = new Map();

for (const file of readdirSync(testDir).filter((name) => name.endsWith(".spec.ts"))) {
	const source = readFileSync(path.join(testDir, file), "utf8");
	const layer = file.includes(".e2e.") ? "e2e" : "integration";

	for (const match of source.matchAll(/test(?:\.fail|\.fixme)?\(\s*(["'])\[([A-Z]+-\d+)\] (.+?)\1,\s*\{\s*tag:\s*(\[[^\]]*\]|["'][^"']*["'])/g)) {
		const tags = [...match[4].matchAll(/@([\w-]+)/g)].map((tag) => tag[1]).join(", ");

		testRows.set(match[2], {title: match[3], tags, layer});
	}
}

const problems = [];

for (const [id, test] of testRows) {
	const row = docRows.get(id);

	if (row === undefined) {
		problems.push(`${id} 문서에 없음`);
		continue;
	}

	for (const key of ["title", "tags", "layer"]) {
		if (row[key] !== test[key]) {
			problems.push(`${id} ${key}: 문서 "${row[key]}" ≠ 테스트 "${test[key]}"`);
		}
	}
}

for (const id of docRows.keys()) {
	if (!testRows.has(id)) {
		problems.push(`${id} 테스트에 없음`);
	}
}

const anchors = new Set([...doc.matchAll(/<a id="(test-[a-z]+-\d+)">/g)].map((match) => match[1]));

for (const [, target] of doc.matchAll(/\]\(#(test-[a-z]+-\d+)\)/g)) {
	if (!anchors.has(target)) {
		problems.push(`#${target} 링크의 행 없음`);
	}
}

console.info(problems.length > 0 ? problems.join("\n") : `${docPath}: 시나리오 ${docRows.size}개, 테스트와 일치`);
process.exit(problems.length > 0 ? 1 : 0);
