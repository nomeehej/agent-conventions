// [!code ++]
// page/orders/_type/summary-snapshot.ts
// [!code ++]
// 폴더 이름이 이미 orders이므로 파일 이름에 다시 쓰지 않는다.

// ----------------------------------------------------------------------------------------
// 한 조회 시점의 주문 요약 목록과 조건
//
//   rows
//      조회 시점의 행 목록이다.
//
//   filters
//      조회에 사용한 필터다.
// ----------------------------------------------------------------------------------------
// [!code ++]
interface SummarySnapshot {
	rows: OrderRow[];
	filters: OrderFilters;
}

// [!code ++]
const summarySnapshot: SummarySnapshot = responseOrderSummarySuspense.data;
