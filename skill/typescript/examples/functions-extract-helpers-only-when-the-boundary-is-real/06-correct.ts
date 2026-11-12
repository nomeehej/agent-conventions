// page/orders/_function/build-order-metrics.ts

// ----------------------------------------------------------------------------------------
// 주문 요약 수치 행, 금액은 통화 없이 소수 둘째 자리까지
// ----------------------------------------------------------------------------------------
export const buildOrderMetrics = (summary: OrderSummary): SummaryMetric[] => {
	return [
// [!code ++]
		{id: "orderAmount", label: "주문 금액", value: summary.orderAmount.value.toFixed(2)},
// [!code ++]
		{id: "totalAmount", label: "총 금액", value: summary.totalAmount.value.toFixed(2)},
	];
};
