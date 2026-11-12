const filterOverdueLines = (order: Order): OrderLine[] => {
	// 콜백 안에서 만들면 줄마다 다시 생성된다.
	const overdueIds = new Set(order.overdueLineIds);

	return order.lines.filter((line) => overdueIds.has(line.id));
};
