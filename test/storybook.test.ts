import assert from "node:assert/strict";
import {readFile} from "node:fs/promises";
import test from "node:test";

import {buildSkillPaths, isBuildableSkill} from "../src/config.js";
import {readSkillDocument} from "../src/parser.js";
import {assertRemovedApparatusStaysGone, assertRouterProtocol, assertRouterShape, splitFrontmatter} from "./helpers/router-contract.js";

test("Storybook is discoverable with required TypeScript, conditional React, CSS and Testing, and the shared router protocol", async () => {
	assert.equal(await isBuildableSkill("storybook"), true);
	const skillPaths = buildSkillPaths("storybook");
	const document = await readSkillDocument(skillPaths);
	const source = await readFile(skillPaths.skillEntrypointPath, "utf8");
	const {body} = splitFrontmatter(source);

	assertRouterShape(source, "convention-storybook");
	assertRouterProtocol(body);
	assertRemovedApparatusStaysGone(body);
	assert.equal(document.metadata.companions?.find((companion) => companion.skill === "typescript")?.mode, "required");

	for (const skillName of ["react", "css", "testing"]) {
		assert.equal(document.metadata.companions?.find((companion) => companion.skill === skillName)?.mode, "conditional");
	}
});
