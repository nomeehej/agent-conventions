const filterVisibleRows = (rows: Row[], keyword: string): Row[] => {
	// 콜백 안에서 만들면 행마다 다시 계산된다.
	const lowerKeyword = keyword.trim().toLowerCase();

	return rows.filter((row) => row.name.toLowerCase().includes(lowerKeyword));
};
