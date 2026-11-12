const handleStatusFilterChange = (nextStatus: ProductStatusFilter) => {
	// 행 12,000개에서 필터 전환이 320ms로 측정되어 클릭이 지연된다.
	startTransition(async () => {
		await queryClient.prefetchQuery(productListQueryOptions());

		// await 뒤에는 트랜지션 범위가 끝나므로 다시 감싸야 급하지 않은 갱신으로 남는다.
		startTransition(() => {
			setStatusFilter(nextStatus);
		});
	});
};
