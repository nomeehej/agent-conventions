// test/orders/orders.e2e.spec.ts
import { expect, test } from "@playwright/test";

test("조회가 끝나면 완료 문구가 표시된다", async ({ page }) => {
	/**
	 * WHEN
	 * 주문 조회 화면 진입
	 */
	await page.goto("/orders");

	/**
	 * THEN
	 * 조회 완료 상태까지 재시도하는 단언
	 */
	// [!code ++]
	await expect(page.getByRole("status")).toHaveText("조회했습니다");
});
