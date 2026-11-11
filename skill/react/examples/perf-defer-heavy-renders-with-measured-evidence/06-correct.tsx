const handleStatusFilterChange = (nextStatus: ProductStatusFilter) => {
	// 행 12,000개에서 필터 전환 320ms 측정, 클릭 지연
	startTransition(async () => {
		await queryClient.prefetchQuery(productListQueryOptions());

		// await 뒤에는 트랜지션 범위 종료. 다시 감싸야 급하지 않은 갱신으로 유지
		startTransition(() => {
			setStatusFilter(nextStatus);
		});
	});
};
