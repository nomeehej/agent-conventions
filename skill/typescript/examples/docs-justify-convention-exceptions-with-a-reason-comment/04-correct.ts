// [!code ++]
// 예외: 행 5,000개 매 렌더 필터링 120ms 측정 → 지연한 검색어 변경 때만 재계산
const filteredRows = useMemo(() => {
	return rows.filter((row) => matchRow(row, deferredKeyword));
}, [deferredKeyword, rows]);
