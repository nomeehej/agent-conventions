// test/orders/orders.e2e.spec.ts
import { expect, test } from "@playwright/test";

test("주문 화면에 진입하면 목록 제목이 표시된다", async ({ page }) => {
	/**
	 * WHEN
	 * 주문 화면 진입
	 */
	// [!code ++]
	await page.goto("/orders");

	/**
	 * THEN
	 * 목록 제목
	 */
	await expect(page.getByRole("heading", { name: "주문 목록", exact: true })).toBeVisible();
});

test("저장하면 완료 안내가 표시된다", async ({ page }) => {
	/**
	 * GIVEN
	 * 주문 등록 모달이 열린 화면
	 */
	// [!code ++]
	await page.goto("/orders/new");

	/**
	 * WHEN
	 * 주문 저장
	 */
	await page
		.getByRole("dialog", { name: "주문 등록" })
		.getByRole("button", { name: "저장", exact: true })
		.click();

	/**
	 * THEN
	 * 저장 완료 안내
	 */
	await expect(page.getByRole("status")).toHaveText("저장했습니다");
});
