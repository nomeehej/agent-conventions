const handleCategoryClick = (nextCategoryId: string) => {
	setSelectedCategoryId(nextCategoryId);
};

const handleStatusFilterChange = (nextStatus: ProductStatusFilter) => {
	// 행 12,000개에서 필터 전환 320ms 측정, 클릭 지연
	startTransition(() => {
		setStatusFilter(nextStatus);
	});
};
