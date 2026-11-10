// test/1-orders/1.1-orders.integration.spec.ts
import { expect, test } from "@test/_fixture/test";

import { createGetOrdersStatus200 } from "@/service/__kubb/mock/orders/get-orders";
import { getOrdersHandler } from "@/service/__kubb/msw/orders/get-orders-handler";
import { mockOrders } from "@/service/mock/mock-orders";

// [!code ++]
test("[ORD-012] 주문이 없으면 안내와 초기화 버튼이 표시된다", { tag: ["@mid", "@negative"] }, async ({ mockApi, mount }) => {
	// GIVEN 빈 주문 목록을 응답하는 서버
	mockApi.use(getOrdersHandler(createGetOrdersStatus200({ ...mockOrders(), items: [], total: 0 })));

	// WHEN 주문 화면 story 진입
	const view = await mount("orders/Default");

	// THEN Loading, empty and errors 표의 빈 값 칸 그대로
	await expect(view.getByRole("status")).toHaveText("주문이 없습니다");
	await expect(view.getByRole("button", { name: "초기화" })).toBeVisible();
});

// [!code ++]
test.fixme("[ORD-013] 목록 조회가 500이면 표 자리만 다시 시도가 표시된다", { tag: ["@mid", "@negative"] }, async ({ mount }) => {
	// GIVEN Plan 3단계 연동 뒤 fixme 해제. 오류 응답은 환불 필드가 들어온 spec 위에서 작성
	await mount("orders/Default");
});
