import {loadTargetSkillPaths} from "../src/config.js";
import {validateSkill} from "../src/validate.js";

// ----------------------------------------------------------------------------------------
// 정본 검사
//
// 인자 없이 실행하면 모든 skill을, `--skill=<name>`을 주면 하나를 검사한다.
// ----------------------------------------------------------------------------------------
for (const skillPaths of await loadTargetSkillPaths(process.argv.slice(2))) {
	await validateSkill(skillPaths);
}
