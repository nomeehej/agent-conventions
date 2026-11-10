// service/order/fetch-order.ts

// ----------------------------------------------------------------------------------------
// [!code ++]
// 주문 상세 조회, 없는 주문 ID는 404 오류로 실패
// ----------------------------------------------------------------------------------------
export const fetchOrder = async (orderId: string): Promise<Order> => {
	return await client.get(`/orders/${orderId}`);
};
