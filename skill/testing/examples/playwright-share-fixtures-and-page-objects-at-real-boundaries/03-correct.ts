// test/_fixture/orders-page.ts
import type { Page } from "@playwright/test";

// ----------------------------------------------------------------------------------------
// 주문 화면의 locator
//
// 목록과 상세 spec이 함께 사용한다.
// ----------------------------------------------------------------------------------------
export class OrdersPage {
	constructor(private readonly page: Page) {}

	// [!code ++]
	orderRow(orderId: string) {
		return this.page
			.getByRole("table", { name: "주문 목록" })
			.getByRole("row")
			.filter({ hasText: orderId });
	}
}
