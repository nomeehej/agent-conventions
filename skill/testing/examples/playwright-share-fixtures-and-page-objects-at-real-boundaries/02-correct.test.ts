// test/orders/orders.e2e.spec.ts
import { expect, test as base } from "@playwright/test";

import type { Page } from "@playwright/test";

/**
 * 주문 화면의 반복 탐색과 이동
 */
class OrdersPage {
	constructor(private readonly page: Page) {}

	get representativeOrderRow() {
		return this.page
			.getByRole("table", { name: "주문 목록" })
			.getByRole("row")
			.filter({ hasText: "order-1" });
	}

	async goto() {
		await this.page.goto("/orders");
	}
}

/**
 * 주문 화면 전용 fixture
 */
interface Fixtures {
	/**
	 * 테스트가 받은 page를 사용하는 화면 객체
	 */
	ordersPage: OrdersPage;
}

const test = base.extend<Fixtures>({
	// [!code ++]
	ordersPage: async ({ page }, use) => {
		await use(new OrdersPage(page));
	},
});

test("목록에 주문이 표시된다", async ({ ordersPage }) => {
	/**
	 * GIVEN
	 * order-1이 준비된 환경의 주문 화면 객체
	 */

	/**
	 * WHEN
	 * 주문 목록 진입
	 */
	await ordersPage.goto();

	/**
	 * THEN
	 * 목록의 대표 주문
	 */
	await expect(ordersPage.representativeOrderRow).toBeVisible();
});

test("주문을 누르면 상세로 이동한다", async ({ page, ordersPage }) => {
	/**
	 * GIVEN
	 * 대표 주문이 있는 목록
	 */
	await ordersPage.goto();

	/**
	 * WHEN
	 * 대표 주문 링크 클릭
	 */
	await ordersPage.representativeOrderRow.getByRole("link").click();

	/**
	 * THEN
	 * 선택한 주문의 상세 URL
	 */
	await expect(page).toHaveURL(/\/orders\/order-1$/);
});
