// ----------------------------------------------------------------------------------------
// 상품 목록 search 파라미터
//
// pageSize는 여기서 기본값 입력, 화면에서는 필수 값
// ----------------------------------------------------------------------------------------
const urlParsers = {
	pageSize: parseAsInteger.withDefault(pagination_default_page_size),
};

const [query] = useQueryStates(urlParsers);

fetchProducts({pageSize: query.pageSize});
setVisibleRowCount(query.pageSize);
