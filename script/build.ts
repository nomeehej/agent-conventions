import {buildSkill} from "../src/build.js";
import {parseCliArgs, loadTargetSkillPaths} from "../src/config.js";
import {buildSite} from "../src/site.js";

// ----------------------------------------------------------------------------------------
// skill별 RULES_INDEX, contracts와 content/public/convention/ 생성
//
// `--skill-root`를 지정하면 저장소 사이트 생성은 제외한다.
// ----------------------------------------------------------------------------------------
const args = process.argv.slice(2);

for (const skillPaths of await loadTargetSkillPaths(args)) {
	await buildSkill(skillPaths);
}

if (parseCliArgs(args).skillRootDir === undefined) {
	await buildSite();
}
