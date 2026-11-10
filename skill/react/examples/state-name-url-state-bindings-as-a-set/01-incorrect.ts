// [!code error]
// page/products/_constant/product-search.ts: 목록 화면과 필터 대화상자가 읽음
// [!code error]
export const productSearch = {
	page: parseAsInteger.withDefault(pagination_default_page),
	keyword: parseAsString,
};
