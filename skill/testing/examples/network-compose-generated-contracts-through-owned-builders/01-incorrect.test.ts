// test/orders/orders.integration.spec.ts
import { http, HttpResponse } from "msw";

import { expect, test } from "@test/_fixture/test";

test("기본 주문 목록의 수량을 표시한다", async ({ mockApi, mount }) => {
	/**
	 * GIVEN
	 * spec마다 직접 복사한 정상 응답
	 */
	// [!code error]
	mockApi.use(http.get("*/api/orders", () => {
		return HttpResponse.json({ items: [{ id: "order-1", quantity: 1234 }], total: 1 });
	}));

	/**
	 * WHEN
	 * 주문 story 진입
	 */
	const view = await mount("orders/Default");

	/**
	 * THEN
	 * 표시된 수량
	 */
	await expect(view.getByRole("cell", { name: "1,234.00", exact: true })).toBeVisible();
});
