const [isPending, startTransition] = useTransition();

const handleStatusFilterChange = (nextStatus: ProductStatusFilter) => {
	// 행 12,000개에서 필터 전환이 320ms로 측정되어 클릭이 지연된다.
	startTransition(() => {
		setStatusFilter(nextStatus);
	});
};

return <FilterBar isBusy={isPending} onStatusChange={handleStatusFilterChange} />;
