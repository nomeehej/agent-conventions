// test/orders/chart.e2e.spec.ts
import { expect, test } from "@playwright/test";

test("차트 이미지가 기준값과 같다", async ({ page }) => {
	/**
	 * GIVEN
	 * 고정 데이터로 그린 뒤 렌더 완료 신호를 낸 수량 차트 화면
	 */
	await page.goto("/orders/chart");
	const chart = page.getByTestId("quantity-chart");
	await expect(chart).toHaveAttribute("data-state", "ready");

	/**
	 * THEN
	 * 연속 캡처가 같아진 뒤 비교한 동일 환경의 이미지 기준값
	 */
	// [!code ++]
	await expect(chart).toHaveScreenshot("quantity-chart.png");
});
