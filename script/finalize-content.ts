import {createHash} from "node:crypto";
import {readdir, readFile, writeFile} from "node:fs/promises";
import path from "node:path";
import {fileURLToPath} from "node:url";

// ----------------------------------------------------------------------------------------
// 배포 HTML 마무리
//
// 파비콘 캐시를 갱신하고 영어 홈의 언어 표기를 적용한다.
// ----------------------------------------------------------------------------------------
const faviconVersion = createHash("sha256")
	.update(await readFile(new URL("../content/asset/favicon.svg", import.meta.url)))
	.digest("hex");
const homePath = fileURLToPath(new URL("../content/dist/index.html", import.meta.url));

for (const entry of await readdir(new URL("../content/dist/", import.meta.url), {recursive: true, withFileTypes: true})) {
	if (!entry.isFile() || !entry.name.endsWith(".html")) {
		continue;
	}

	const targetPath = path.join(entry.parentPath, entry.name);
	const source = await readFile(targetPath, "utf8");

	await writeFile(
		targetPath,
		(targetPath === homePath ? source.replace(/(<html\b[^>]*\blang=")[^"]*(")/, "$1en$2") : source).replace(
			/(<link\b[^>]*\bhref="[^"]*\/favicon\.svg)(?:\?[^"]*)?"/g,
			`$1?v=${faviconVersion}"`,
		),
	);
}
