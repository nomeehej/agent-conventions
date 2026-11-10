const toDueTexts = (row: OrderRow): string[] => {
// [!code error]
	const isOverdue = row.dueDate < today;

	return [
// [!code error]
		isOverdue ? "마감 지남" : "마감 전",
// [!code error]
		isOverdue ? "독촉 필요" : "대기",
	];
};
