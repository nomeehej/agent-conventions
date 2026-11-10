// playwright.config.ts
import { defineConfig } from "@playwright/test";

export default defineConfig({
	// 이미지 Buffer를 expect(buffer).toMatchSnapshot()으로도 비교하는 프로젝트
	// [!code error]
	expect: { toHaveScreenshot: { maxDiffPixelRatio: 0.01 } },
	use: { viewport: { width: 1280, height: 720 }, timezoneId: "Asia/Seoul" },
});
