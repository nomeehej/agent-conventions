// service/order/fetch-order-list.ts

// ----------------------------------------------------------------------------------------
// 주문 목록 조회, 응답 순서 대신 최신 주문순 정렬
//
// [!code error]
// 응답 순서 그대로 사용 → 새로고침마다 목록 순서 변동
// [!code error]
// 같은 orderedAt의 순서는 서버 미보장 → id 오름차순으로 고정
// ----------------------------------------------------------------------------------------
export const fetchOrderList = async (): Promise<Order[]> => {
	const orders = await client.get<Order[]>("/orders");

	return orderBy(orders, ["orderedAt", "id"], ["desc", "asc"]);
};
