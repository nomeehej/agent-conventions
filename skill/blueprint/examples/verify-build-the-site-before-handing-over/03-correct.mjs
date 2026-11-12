import {execSync} from "node:child_process";
import {existsSync, readdirSync, readFileSync} from "node:fs";

// ----------------------------------------------------------------------------------------
// 설계 문서 검사
//
// build 경고, 번호 중복, 추천 하나, 서술 어미, 열린 카드 수, 표 칸 수를 검사한다.
// ----------------------------------------------------------------------------------------
const root = "content/public";
const listDocs = (dir) => {
	return existsSync(`${root}/${dir}`) ? readdirSync(`${root}/${dir}`).map((name) => `${dir}/${name}`) : [];
};
const files = ["overview.md", "shared.md", "questions.md", ...listDocs("screen"), ...listDocs("change")];
const docs = new Map(files.map((file) => [file, readFileSync(`${root}/${file}`, "utf8")]));
const openStatus = /(Needs answer|Waiting on BE|Waiting on plan|User decides)\]$/;
const problems = [];

const build = execSync("npx for-humanity build 2>&1", {encoding: "utf8"});
const warnings = build.split("\n").filter((line) => /\sWARN\s/.test(line));
if (warnings.length > 0) {
	problems.push(`build 경고 ${warnings.length}`, ...warnings);
}

const cards = [...docs].flatMap(([file, text]) => [...text.matchAll(/^:::details\[([DQBR]\d+) (.+)$/gm)].map((match) => ({file, id: match[1], title: match[2], body: text.slice(match.index, text.indexOf("\n:::\n", match.index))})));
const ids = cards.map((card) => card.id);
const duplicated = ids.filter((id, index) => ids.indexOf(id) !== index);
if (duplicated.length > 0) {
	problems.push(`번호 중복 ${duplicated.join(", ")}`);
}

for (const card of cards) {
	const picks = card.body.split("img/star.svg").length - 1;
	if (/^\| Option \|/m.test(card.body) && picks !== 1) {
		problems.push(`${card.id} 추천 ${picks}`);
	}
}

for (const [file, text] of docs) {
	const prose = text.split("\n").filter((line) => !line.startsWith("|") && /[가-힣]다\.?$/.test(line) && !/마다\.?$/.test(line));
	if (prose.length > 0) {
		problems.push(`${file} 서술 어미 ${prose.length}`, ...prose);
	}

	let columns = 0;
	for (const line of text.split("\n")) {
		const count = line.startsWith("|") ? line.split(/(?<!\\)\|/).length - 2 : 0;
		if (count > 0 && columns > 0 && count !== columns) {
			problems.push(`${file} 표 칸 ${count} ≠ 머리 ${columns}: ${line.slice(0, 60)}`);
		}
		columns = count > 0 && columns === 0 ? count : count > 0 ? columns : 0;
	}

	const open = cards.filter((card) => card.file === file && openStatus.test(card.title)).map((card) => card.id);
	const stated = text.match(/^열린 것 (\d+)개|^열린 것 없음/m);
	if (stated && Number(stated[1] ?? 0) !== open.length) {
		problems.push(`${file} 열린 것 ${stated[1] ?? 0} ≠ 카드 ${open.length}`);
	}

	const row = docs.get("questions.md").split("\n").find((line) => line.startsWith(`| [`) && line.includes(`(${file}#questions)`));
	const listed = row ? [...row.split("|")[2].matchAll(/\[([DQBR]\d+)\]\(([^)#]+)#/g)].filter((match) => match[2] === file).map((match) => match[1]) : open;
	if (listed.join() !== open.join()) {
		problems.push(`${file} questions.md 열린 번호 ${listed.join(", ") || "없음"} ≠ 카드 ${open.join(", ") || "없음"}`);
	}
}

console.log(problems.length > 0 ? problems.join("\n") : "검사 통과");
process.exit(problems.length > 0 ? 1 : 0);
