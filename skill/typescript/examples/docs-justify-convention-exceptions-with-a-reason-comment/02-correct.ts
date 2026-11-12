// [!code ++]
// 예외: columns 참조 유지, MUI Data Grid는 columns 참조 변경 → 열 너비와 순서 유실 가능
const columns = useMemo(() => {
	return buildTableColumns(responseTableColumnsSuspense.data.columns);
}, [responseTableColumnsSuspense.data.columns]);
