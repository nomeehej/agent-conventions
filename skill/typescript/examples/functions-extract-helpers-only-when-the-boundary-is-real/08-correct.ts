// page/orders/_function/group-orders-by-status.ts

// ----------------------------------------------------------------------------------------
// 결제, 취소 주문 묶음
//
// 합계는 통화 없는 숫자 문자열이다.
// ----------------------------------------------------------------------------------------
export const groupOrdersByStatus = (rows: OrderRow[]): SummaryStatusGroup[] => {
// [!code ++]
	// ----------------------------------------------------------------------------------------
	// 상태 하나의 묶음
	//
	// 설명에는 건수를 쓴다.
	// ----------------------------------------------------------------------------------------
// [!code ++]
	const buildStatusGroup = (status: OrderStatus, title: string): SummaryStatusGroup => {
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
	return [buildStatusGroup("paid", "결제"), buildStatusGroup("cancelled", "취소")];
};
