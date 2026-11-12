// ----------------------------------------------------------------------------------------
// Figma 프레임 그림과 구역 표시를 설계 문서 그림으로 저장
//
//   사용법
//      `node script/blueprint/figma-capture.mjs [--md <문서>] <저장 경로> <프레임 node>
//      <1번 node> ... [+자르기만 할 node]`로 실행한다.
//
//   토큰
//      `.ignore/figma-token`에서 읽고 출력에 찍지 않는다.
//
//   자르는 범위
//      넘긴 node 전부를 감싼 상자에 여백 40을 더한다.
//
//   `+` 붙은 node
//      구역 표시는 하지 않고 자르는 범위에만 포함한다.
//
//   PNG
//      원본을 저장한다.
//      구역 표시는 for-humanity `fx-shot` 그림으로 겹쳐 문서에서 켜고 끌 수 있다.
//
//   --md
//      있으면 문서의 같은 이름 그림을 새 figure로 교체하고, 없으면 출력한다.
// ----------------------------------------------------------------------------------------
import {readFileSync, writeFileSync} from "node:fs";
import path from "node:path";
import {chromium} from "playwright";

const fileKey = "Ab12Cd34Ef56Gh78Ij90Kl";
const padding = 40;
const margin = 60;
const args = process.argv.slice(2);
const mdPath = args[0] === "--md" ? args[1] : undefined;
const [outPath, frameId, ...nodeArgs] = mdPath === undefined ? args : args.slice(2);
const nodeIds = nodeArgs.map((arg) => arg.replace(/^\+/, ""));
const markIds = nodeArgs.filter((arg) => !arg.startsWith("+"));
const headers = {"X-Figma-Token": readFileSync(".ignore/figma-token", "utf8").trim()};

const getJson = async (url) => {
	const response = await fetch(url, {headers});

	if (!response.ok) {
		console.error(`Figma ${response.status}: ${url}`);
		process.exit(1);
	}

	return response.json();
};

const nodes = await getJson(`https://api.figma.com/v1/files/${fileKey}/nodes?ids=${[frameId, ...nodeIds].map(encodeURIComponent).join(",")}&depth=1`);
const frame = nodes.nodes[frameId].document.absoluteBoundingBox;

const boxOf = (id) => {
	const box = nodes.nodes[id].document.absoluteBoundingBox;

	return {x: box.x - frame.x + margin, y: box.y - frame.y + margin, width: box.width, height: box.height};
};

const boxes = nodeIds.map(boxOf);
const left = Math.min(...boxes.map((box) => box.x)) - padding;
const top = Math.min(...boxes.map((box) => box.y)) - padding;
const width = Math.max(...boxes.map((box) => box.x + box.width)) + padding - left;
const height = Math.max(...boxes.map((box) => box.y + box.height)) + padding - top;

const images = await getJson(`https://api.figma.com/v1/images/${fileKey}?ids=${encodeURIComponent(frameId)}&scale=1&format=png&use_absolute_bounds=true`);
const png = Buffer.from(await (await fetch(images.images[frameId])).arrayBuffer());
const browser = await chromium.launch();
const page = await browser.newPage({viewport: {width: Math.ceil(frame.width) + margin * 2, height: Math.ceil(frame.height) + margin * 2}});

await page.setContent(`<style>body{margin:0;background:#fff}div{padding:${margin}px}img{display:block}</style><div><img src="data:image/png;base64,${png.toString("base64")}"></div>`);
await page.locator("img").evaluate((image) => image.decode());
writeFileSync(outPath, await page.screenshot({clip: {x: left, y: top, width, height}}));
await browser.close();

// ----------------------------------------------------------------------------------------
// 구역 표시 상자
//
// node보다 6 크게 잡고 그림 크기 기준 백분율로 적으므로
// 문서 폭이 바뀌어도 위치가 유지된다.
// ----------------------------------------------------------------------------------------
const percent = (value, total) => `${Math.round((value / total) * 10000) / 100}%`;
const marks = markIds
	.map(boxOf)
	.map((box, index) => `<i style="left:${percent(box.x - 6 - left, width)};top:${percent(box.y - 6 - top, height)};width:${percent(box.width + 12, width)};height:${percent(box.height + 12, height)}"><b>${index + 1}</b></i>`)
	.join("");
const name = path.basename(outPath, ".png");
const buildFigure = (alt, src) =>
	`<figure class="fx-shot" data-shot="${name}">\n<div class="fx-shot__frame"><img src="${src}" alt="${alt}" width="${Math.round(width)}" height="${Math.round(height)}"><div class="fx-shot__marks" aria-hidden="true">${marks}</div></div>\n<label class="fx-shot__toggle" title="구역 표시"><input type="checkbox" checked aria-label="구역 표시"></label>\n</figure>`;

if (mdPath === undefined) {
	console.info(buildFigure("", path.basename(outPath)));
} else {
	const doc = readFileSync(mdPath, "utf8");
	const found = new RegExp(`<figure class="fx-shot" data-shot="${name}">\\n<div class="fx-shot__frame"><img src="([^"]+)" alt="([^"]*)"[\\s\\S]*?</figure>`).exec(doc);

	if (found === null) {
		console.error(`${mdPath}에 ${name} 그림 없음`);
		process.exit(1);
	}

	// alt 안의 $가 치환 패턴으로 해석되지 않도록 교체 값을 함수로 전달한다.
	writeFileSync(mdPath, doc.replace(found[0], () => buildFigure(found[2], found[1])));
}

console.info(`${outPath} 저장. Figma ${nodes.lastModified.slice(0, 10)} 판, 표시 ${markIds.length}개`);
