import assert from "node:assert/strict";
import {readFile, readdir} from "node:fs/promises";
import test from "node:test";

import {getSkillPaths, isBuildableSkill} from "../src/config.js";
import {readSkillDocument} from "../src/parser.js";
import {generateSiteFiles} from "../src/site.js";
import {assertRemovedApparatusStaysGone, assertRouterProtocol, assertRouterShape, splitFrontmatter} from "./helpers/router-contract.js";

test("Testing is discoverable with conditional framework companions and the shared router protocol", async () => {
	assert.equal(await isBuildableSkill("testing"), true);
	const skillPaths = getSkillPaths("testing");
	const document = await readSkillDocument(skillPaths);
	const source = await readFile(skillPaths.skillEntrypointPath, "utf8");
	const {body} = splitFrontmatter(source);

	assertRouterShape(source, "convention-testing");
	assertRouterProtocol(body);
	assertRemovedApparatusStaysGone(body);
	assert.equal(document.metadata.companions?.find((companion) => companion.skill === "typescript")?.mode, "required");
	assert.equal(document.metadata.companions?.find((companion) => companion.skill === "react")?.mode, "conditional");
	assert.equal(document.metadata.companions?.find((companion) => companion.skill === "css")?.mode, "conditional");
});

test("Testing renders under Coding with section links and real example assets", async () => {
	assert.equal(await isBuildableSkill("testing"), true);

	const files = await generateSiteFiles();
	const overview = files.find((file) => file.path === "testing.md");

	assert.ok(overview);
	assert.match(overview.content, /^group: Coding$/m);
	assert.match(overview.content, /testing\/01-scope\.md/);
	assert.match(overview.content, /testing\/08-verification\.md/);
	assert.ok(files.some((file) => file.path.startsWith("examples/testing/") && file.path.endsWith("-correct.test.ts")));
});

test("Playwright examples expose GIVEN, WHEN and THEN while Vitest examples stay unmarked", async () => {
	/**
	 * GIVEN
	 * 독자가 복사하는 실행 예제 전체
	 */
	const examplesUrl = new URL("../skill/testing/examples/", import.meta.url);
	const paths = (await readdir(examplesUrl, {recursive: true})).filter((path) => path.endsWith(".test.ts"));
	assert.ok(paths.length > 0);
	const order = ["GIVEN", "WHEN", "THEN"];

	for (const path of paths) {
		/**
		 * WHEN
		 * 러너와 시나리오 구간의 수집
		 */
		const source = await readFile(new URL(path, examplesUrl), "utf8");
		const caseCount = [...source.matchAll(/^\s*test(?:\(|\.each\()/gm)].length;
		const phases = [...source.matchAll(/\* (GIVEN|WHEN|THEN)\n/g)].map((match) => match[1]);

		/**
		 * THEN
		 * Vitest 사례는 구간 표시 없음, Playwright 사례는 THEN으로 끝나는 순서대로의 구간과 설명
		 */
		assert.ok(caseCount > 0, `${path} has no executable case`);
		if (/from "vitest"/.test(source)) {
			assert.deepEqual(phases, [], `${path} is a Vitest case and keeps no GIVEN, WHEN, THEN blocks`);
			continue;
		}
		const cases = phases.join(" ").split(/(?<=THEN)\s*/).filter(Boolean);
		assert.equal(cases.length, caseCount, `${path} must end every case with THEN`);
		for (const phasesOfCase of cases.map((text) => text.split(" "))) {
			const indexes = phasesOfCase.map((phase) => order.indexOf(phase));
			assert.equal(phasesOfCase.at(-1), "THEN", `${path} must end every case with THEN`);
			assert.ok(indexes.every((index, position) => position === 0 || indexes[position - 1] < index), `${path} must keep scenario order`);
		}
		for (const phase of order) {
			const labels = phases.filter((label) => label === phase).length;
			const blocks = [...source.matchAll(new RegExp(`\\* ${phase}\\n\\s*\\* \\S[^\\n]*\\n`, "g"))];
			assert.equal(blocks.length, labels, `${path} must describe every ${phase}`);
		}
	}
});

test("Testing exposes suite selection, stories and generated API composition as reader-facing rules", async () => {
	/**
	 * GIVEN
	 * Testing 규칙과 사이트를 읽는 소비자
	 */
	const document = await readSkillDocument(getSkillPaths("testing"));

	/**
	 * WHEN
	 * 문서와 예제의 생성
	 */
	const files = await generateSiteFiles();

	/**
	 * THEN
	 * 선별 기준, story 소비, 생성 계약 조립의 탐색 경로
	 */
	for (const id of [
		"scope-separate-test-level-from-suite-purpose",
		"network-compose-generated-contracts-through-owned-builders",
		"network-share-handlers-across-browser-and-node",
		"story-compose-owned-state-with-real-providers",
		"story-verify-states-through-consuming-tests",
	]) {
		assert.ok(
			document.rules.some((rule) => rule.fileName.endsWith(`-${id}.md`)),
			`${id} is missing`,
		);
	}
	const overview = files.find((file) => file.path === "testing.md");
	const scope = files.find((file) => file.path === "testing/01-scope.md");
	assert.ok(overview);
	assert.ok(scope);
	assert.match(overview.content, /testing\/09-story\.md/);
	assert.match(scope.content, /smoke/);
	assert.match(scope.content, /sanity/);
	assert.ok(files.some((file) => file.path.startsWith("examples/testing/") && file.path.endsWith("-correct.story.tsx")));
});
