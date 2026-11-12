// service/order/fetch-order-list.ts

// ----------------------------------------------------------------------------------------
// 주문 목록
//
// [!code ++]
// 응답 순서를 그대로 쓰면 새로고침할 때마다 목록 순서가 바뀐다. 그래서 최신 주문순으로
// [!code ++]
// 정렬하고, 서버가 같은 orderedAt의 순서를 보장하지 않으므로 id 오름차순을 한 번 더 건다.
// ----------------------------------------------------------------------------------------
export const fetchOrderList = async (): Promise<Order[]> => {
	const orders = await client.get<Order[]>("/orders");

	return orderBy(orders, ["orderedAt", "id"], ["desc", "asc"]);
};
