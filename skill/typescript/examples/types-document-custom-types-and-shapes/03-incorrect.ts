// ----------------------------------------------------------------------------------------
// [!code error]
// 주문 검색 조건
//
// [!code error]
//   keyword
// [!code error]
//      검색어다.
//
// [!code error]
//   status
// [!code error]
//      주문 상태다.
// ----------------------------------------------------------------------------------------
interface OrderSearchCondition {
	keyword: string;
	status: OrderStatus;
}
