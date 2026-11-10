// service/order/fetch-order-list.ts

// ----------------------------------------------------------------------------------------
// 주문 목록 조회, 응답 순서 대신 최신 주문순 정렬
//
// [!code error]
// 응답 순서를 그대로 쓰면 새로고침마다 순서가 바뀌기 때문에 최신 주문순으로 정렬
// [!code error]
// 같은 orderedAt의 순서는 서버가 보장하지 않음, 그래서 id 오름차순으로 한 번 더 정렬
// ----------------------------------------------------------------------------------------
export const fetchOrderList = async (): Promise<Order[]> => {
	const orders = await client.get<Order[]>("/orders");

	return orderBy(orders, ["orderedAt", "id"], ["desc", "asc"]);
};
