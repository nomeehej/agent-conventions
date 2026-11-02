// test/orders/orders.integration.spec.ts
import { expect, test } from "@test/_fixture/test";

import { createGetOrdersStatus200 } from "@/service/__kubb/mock/orders/get-orders";
import { getOrdersHandler } from "@/service/__kubb/msw/orders/get-orders-handler";
import { mockOrders } from "@/service/mock/mock-orders";

// [!code ++]
test("ORD-012 빈 결과에 안내와 초기화 버튼이 보인다", async ({ mockApi, mount }) => {
	/**
	 * GIVEN
	 * 빈 주문 목록을 응답하는 서버
	 */
	mockApi.use(getOrdersHandler(createGetOrdersStatus200({ ...mockOrders(), items: [], total: 0 })));

	/**
	 * WHEN
	 * 주문 화면 story 진입
	 */
	const view = await mount("orders/Default");

	/**
	 * THEN
	 * 상태 표의 빈 결과 줄 그대로
	 */
	await expect(view.getByRole("status")).toHaveText("주문이 없습니다");
	await expect(view.getByRole("button", { name: "초기화" })).toBeVisible();
});

// [!code ++]
test.fixme("ORD-013 오류에 표 칸 경계의 다시 시도가 보인다", async ({ mount }) => {
	/**
	 * GIVEN
	 * 3단계 연동 뒤 풂. 오류 응답은 환불 필드가 들어온 spec 위에서 만듦
	 */
	await mount("orders/Default");
});
