import path from "node:path";

import {checkGeneratedSkill} from "../src/check-generated.js";
import {loadTargetSkillPaths} from "../src/config.js";

// ----------------------------------------------------------------------------------------
// 생성물 신선도 검사
//
// RULES_INDEX와 contracts가 원본에서 다시 그린 것과 바이트 단위로 같은지 확인한다.
// ----------------------------------------------------------------------------------------
for (const skillPaths of await loadTargetSkillPaths(process.argv.slice(2))) {
	await checkGeneratedSkill(skillPaths);
	console.log(`Checked ${path.join(skillPaths.skillName, "RULES_INDEX.md")}`);
}
