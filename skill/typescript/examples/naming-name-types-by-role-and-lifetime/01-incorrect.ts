// ----------------------------------------------------------------------------------------
// 주문 화면 데이터
//
// rows: 조회 시점의 행 목록
// filters: 조회에 사용한 필터
// ----------------------------------------------------------------------------------------
// [!code error]
interface OrderViewModel {
	rows: OrderRow[];
	filters: OrderFilters;
}

// [!code error]
const orderVM: OrderViewModel = response.data;
