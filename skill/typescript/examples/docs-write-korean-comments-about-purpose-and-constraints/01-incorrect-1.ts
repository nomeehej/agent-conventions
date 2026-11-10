// service/order/fetch-order.ts

// ----------------------------------------------------------------------------------------
// [!code error]
// Fetches an order by id.
// ----------------------------------------------------------------------------------------
export const fetchOrder = async (orderId: string): Promise<Order> => {
	return await client.get(`/orders/${orderId}`);
};
