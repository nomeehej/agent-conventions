const toRowClassNames = (row: OrderRow): string[] => {
// [!code error]
	const isOverdue = row.dueDate < today;

	return [
// [!code error]
		isOverdue ? "row__root--overdue" : "row__root",
// [!code error]
		isOverdue ? "row__badge--overdue" : "row__badge",
	];
};
