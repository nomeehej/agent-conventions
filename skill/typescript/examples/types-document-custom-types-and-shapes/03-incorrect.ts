// ----------------------------------------------------------------------------------------
// [!code error]
// 주문 검색 조건
//
// [!code error]
// keyword: 검색어
// [!code error]
// status: 주문 상태
// ----------------------------------------------------------------------------------------
interface OrderSearchCondition {
	keyword: string;
	status: OrderStatus;
}
