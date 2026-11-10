// page/orders/_function/to-order-status-groups.ts
/**
 * 결제, 취소 주문 묶음. 합계는 통화 없는 숫자 문자열
 */
export const toOrderStatusGroups = (rows: OrderRow[]): SummaryStatusGroup[] => {
// [!code ++]
	/**
	 * 상태 하나의 묶음. 설명은 건수
	 */
// [!code ++]
	const toStatusGroup = (status: OrderStatus, title: string): SummaryStatusGroup => {
		const statusRows = rows.filter((row) => row.status === status);
		return {
			id: status,
			title,
			description: `${statusRows.length}건`,
			total: String(sumBy(statusRows, (row) => row.total)),
			rows: statusRows.map((row) => ({id: row.id, label: row.name, value: row.total})),
		};
	};

// [!code ++]
	return [toStatusGroup("paid", "결제"), toStatusGroup("cancelled", "취소")];
};
