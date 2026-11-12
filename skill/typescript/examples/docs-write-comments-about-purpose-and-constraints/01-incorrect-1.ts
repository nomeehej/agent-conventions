// service/order/fetch-order.ts

// ----------------------------------------------------------------------------------------
// [!code error]
// 주문을 조회하는 함수
// ----------------------------------------------------------------------------------------
export const fetchOrder = async (orderId: string): Promise<Order> => {
	return await client.get(`/orders/${orderId}`);
};
