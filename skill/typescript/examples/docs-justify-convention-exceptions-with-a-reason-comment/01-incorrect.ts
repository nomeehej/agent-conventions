// [!code error]
// 예외: 성능을 위해 메모이제이션
const columns = useMemo(() => {
	return buildTableColumns(responseTableColumnsSuspense.data.columns);
}, [responseTableColumnsSuspense.data.columns]);
