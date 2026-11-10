// page/orders/_function/to-order-status-metric.ts

// ----------------------------------------------------------------------------------------
// 주문 한 건의 상태 표시 행, 취소가 임박보다 우선
// ----------------------------------------------------------------------------------------
export const toOrderStatusMetric = (row: OrderRow): SummaryMetric => {
// [!code ++]
	const toStatusLabel = (): StatusLabel => {
		if (row.isCancelled) {
			return "취소";
		}
		if (row.isDueSoon) {
			return "임박";
		}
		return "진행";
	};

	return {id: row.id, label: row.name, value: toStatusLabel()};
};
