// [!code ++]
// 예외: MUI Data Grid는 columns 참조가 바뀌면 열 너비와 순서를 잃을 수 있다.
const columns = useMemo(() => buildTableColumns(responseTableColumnsSuspense.data.columns), [responseTableColumnsSuspense.data.columns]);
