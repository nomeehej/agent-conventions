const [keyword, setKeyword] = useState("");
const deferredKeyword = useDeferredValue(keyword);

// 예외: 행 12,000개에서 매 렌더 필터링이 180ms로 측정되어 지연한 검색어에만 다시 계산한다.
const filteredRows = useMemo(() => {
	return rows.filter((row) => fuzzyMatchRow(row, deferredKeyword));
}, [deferredKeyword, rows]);

return <ProductListRows rows={filteredRows} />;
