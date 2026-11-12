// test/orders/orders.e2e.spec.ts
import { expect, test } from "@playwright/test";

// baseURL은 검증할 배포 산출물이다.
// 세션과 읽기 전용 order-1 데이터는 그 환경에 준비돼 있다.
// [!code ++]
test("주문 화면에 진입하면 대표 목록을 조회한다", { tag: "@smoke" }, async ({ page }) => {
	// WHEN 실제 앱의 주문 화면 진입
	await page.goto("/orders");

	// THEN 앱 초기화와 대표 데이터 조회의 연결
	await expect(page.getByRole("heading", { name: "주문", exact: true })).toBeVisible();
	await expect(page.getByRole("table", { name: "주문 목록" }).getByRole("cell", { name: "order-1", exact: true })).toBeVisible();
});
