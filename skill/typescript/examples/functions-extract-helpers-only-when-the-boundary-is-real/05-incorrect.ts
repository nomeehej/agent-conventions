// page/orders/_function/to-order-metrics.ts
/**
 * 주문 요약 수치 행. 금액은 통화 없이 소수 둘째 자리까지
 */
export const toOrderMetrics = (summary: OrderSummary): SummaryMetric[] => {
// [!code error]
	const toAmountText = (amount: Amount) => {
// [!code error]
		return amount.value.toFixed(2);
// [!code error]
	};

	return [
		{id: "orderAmount", label: "주문 금액", value: toAmountText(summary.orderAmount)},
		{id: "totalAmount", label: "총 금액", value: toAmountText(summary.totalAmount)},
	];
};
