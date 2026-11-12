// service/order/fetch-order.ts

// ----------------------------------------------------------------------------------------
// 주문 상세
//
// [!code ++]
// 없는 주문 ID는 404 오류로 실패한다.
// ----------------------------------------------------------------------------------------
export const fetchOrder = async (orderId: string): Promise<Order> => await client.get(`/orders/${orderId}`);
