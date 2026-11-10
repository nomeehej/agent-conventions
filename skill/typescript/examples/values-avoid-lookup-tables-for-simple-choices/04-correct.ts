// [!code ++]
// ----------------------------------------------------------------------------------------
// 주문 상태 코드 조회표
//
// 예외: GET /orders의 P, C, D 코드를 화면 상태 어휘로 바꾸는 API 경계 계약
// ----------------------------------------------------------------------------------------
const order_status_by_api_code = {
	P: "pending",
	C: "completed",
	D: "cancelled",
} as const satisfies Record<OrderStatusCode, OrderStatus>;
