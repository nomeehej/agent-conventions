import {execSync} from "node:child_process";
import {readFileSync, readdirSync} from "node:fs";

/**
 * 설계 문서 검사 다섯. build 경고, 번호 중복, 추천 하나, 서술 어미, 열린 카드 수
 */
const root = "content/public";
const questions = readFileSync(`${root}/questions.md`, "utf8");
const screens = readdirSync(`${root}/screen`).map((name) => readFileSync(`${root}/screen/${name}`, "utf8"));
const problems = [];

const build = execSync("npx for-humanity build", {encoding: "utf8"});
const warnings = build.split("\n").filter((line) => /\sWARN\s|\[warn\]/.test(line));
if (warnings.length > 0) {
	problems.push(`build 경고 ${warnings.length}`, ...warnings);
}

const headings = [...questions.matchAll(/^### ([DQBR]\d+)$/gm)].map((match) => match[1]);
const resolved = [...questions.matchAll(/^\| ([DQBR]\d+) \|/gm)].map((match) => match[1]);
const numbers = [...headings, ...resolved];
const duplicated = numbers.filter((number, index) => numbers.indexOf(number) !== index);
if (duplicated.length > 0) {
	problems.push(`번호 중복 ${duplicated.join(", ")}`);
}

for (const card of questions.split(/^### /m).slice(1)) {
	const id = card.slice(0, card.indexOf("\n"));
	const hasOptions = /^\| [A-C] /m.test(card);
	const picks = card.split("★").length - 1;
	if (hasOptions && picks !== 1) {
		problems.push(`${id} 추천 ${picks}`);
	}
}

const declarative = [questions, ...screens].flatMap((text) => text.split("\n").filter((line) => /[가-힣]다\.?$/.test(line)));
if (declarative.length > 0) {
	problems.push(`서술 어미 ${declarative.length}`, ...declarative);
}

let counted = 0;
for (const text of screens) {
	const line = text.match(/^열린 카드 (\d+)/m);
	if (line) {
		counted += Number(line[1]);
	}
}
if (headings.length !== counted) {
	problems.push(`열린 카드 수 questions.md ${headings.length}, 화면 문서 합 ${counted}`);
}

console.log(problems.length > 0 ? problems.join("\n") : "검사 통과");
process.exit(problems.length > 0 ? 1 : 0);
