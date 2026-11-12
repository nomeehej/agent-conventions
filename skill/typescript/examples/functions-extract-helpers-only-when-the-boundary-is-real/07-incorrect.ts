// page/orders/_function/group-orders-by-status.ts

// ----------------------------------------------------------------------------------------
// 결제, 취소 주문 묶음, 합계는 통화 없는 숫자 문자열
// ----------------------------------------------------------------------------------------
export const groupOrdersByStatus = (rows: OrderRow[]): SummaryStatusGroup[] => {
// [!code error]
	const paidRows = rows.filter((row) => row.status === "paid");
// [!code error]
	const cancelledRows = rows.filter((row) => row.status === "cancelled");

	return [
		{
			id: "paid",
			title: "결제",
			description: `${paidRows.length}건`,
			total: String(sumBy(paidRows, (row) => row.total)),
			rows: paidRows.map((row) => ({id: row.id, label: row.name, value: row.total})),
		},
		{
			id: "cancelled",
			title: "취소",
			description: `${cancelledRows.length}건`,
			total: String(sumBy(cancelledRows, (row) => row.total)),
			rows: cancelledRows.map((row) => ({id: row.id, label: row.name, value: row.total})),
		},
	];
};
