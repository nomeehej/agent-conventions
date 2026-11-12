const handleCategoryClick = (nextCategoryId: string) => {
	setSelectedCategoryId(nextCategoryId);
};

const handleStatusFilterChange = (nextStatus: ProductStatusFilter) => {
	// 행 12,000개에서 필터 전환이 320ms로 측정되어 클릭이 지연된다.
	startTransition(() => {
		setStatusFilter(nextStatus);
	});
};
