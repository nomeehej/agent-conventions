// test/reports/reports.integration.spec.ts
import { expect, test } from "@playwright/test";

test("뒤집힌 URL 기간이 입력란에 보정돼 표시된다", async ({ mount }) => {
	/**
	 * WHEN
	 * 뒤집힌 기간이 있는 URL 입력으로 기간 화면 story mount
	 */
	const view = await mount("reports/WithSearch", {
		search: "?startDate=2026-03-01&endDate=2026-01-01",
	});

	/**
	 * THEN
	 * 보정된 날짜와 입력란의 실제 연결
	 */
	// [!code ++]
	await expect(view.getByLabel("시작일")).toHaveValue("2026-01-01");
	await expect(view.getByLabel("종료일")).toHaveValue("2026-03-01");
});
