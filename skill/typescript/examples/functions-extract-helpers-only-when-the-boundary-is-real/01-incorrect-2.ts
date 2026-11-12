// page/orders/_function/build-order-summary.ts

// ----------------------------------------------------------------------------------------
// 주문 요약 영역의 표시 데이터
//
// 재고 카드는 재고 수량이 있을 때만 만든다.
// ----------------------------------------------------------------------------------------
export const buildOrderSummary = (params: BuildOrderSummaryParams): OrderSummaryContent => {
	return {
		metrics: toComparisonRows(params),
		statusGroups: buildStatusGroups(params),
		stockCount: buildStockCard(params),
	};
};
