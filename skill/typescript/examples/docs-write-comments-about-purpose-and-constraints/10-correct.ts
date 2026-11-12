// service/order/build-order-save-request.ts

// ----------------------------------------------------------------------------------------
// 주문 저장 요청
//
// [!code ++]
//   제약
// [!code ++]
//      수량은 정수만 받는다(백엔드 답변 2026-10-07).
//
// [!code ++]
//   임시
// [!code ++]
//      배송 메모를 200자에서 자른다. 서버 한도가 늘면 지운다(기획 2026-10-14).
// ----------------------------------------------------------------------------------------
export const buildOrderSaveRequest = (draft: OrderDraft): OrderSaveRequest => ({
	quantity: Math.round(draft.quantity),
	memo: draft.memo.slice(0, order_memo_limit),
});
