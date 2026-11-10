import { expect, test } from "@playwright/test";

test("제목이 표시된다", async ({ page }) => {
	/**
	 * WHEN
	 * 주문 목록 화면 진입
	 */
	await page.goto("/orders");

	/**
	 * THEN
	 * 주문 목록 제목
	 */
	await expect(page.getByRole("heading", { name: "주문 목록" })).toBeVisible();
});
