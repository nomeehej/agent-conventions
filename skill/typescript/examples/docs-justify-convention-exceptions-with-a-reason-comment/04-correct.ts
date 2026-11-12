// [!code ++]
// 예외: 행 5,000개를 렌더마다 거르면 120ms가 걸려 검색어가 바뀔 때만 다시 계산한다.
const filteredRows = useMemo(() => rows.filter((row) => matchRow(row, deferredKeyword)), [deferredKeyword, rows]);
