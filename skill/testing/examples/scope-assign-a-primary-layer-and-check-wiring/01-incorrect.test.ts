// test/reports/reports.integration.spec.ts
import { expect, test } from "@playwright/test";

const ranges = [
	{ start: "2026-03-01", end: "2026-01-01" },
	{ start: "2026-04-01", end: "2026-02-01" },
	{ start: "2026-05-01", end: "2026-03-01" },
];

for (const range of ranges) {
	test(`뒤집힌 기간 ${range.start}를 보정한다`, async ({ mount }) => {
		/**
		 * WHEN
		 * 날짜 보정 함수를 입력 조합마다 화면에서 실행
		 */
		const view = await mount("reports/WithSearch", {
			search: `?startDate=${range.start}&endDate=${range.end}`,
		});

		/**
		 * THEN
		 * 같은 함수의 입력 표를 화면에서 재검사
		 */
		await expect(view.getByLabel("시작일")).toHaveValue(range.end);
		await expect(view.getByLabel("종료일")).toHaveValue(range.start);
	});
}
