// [!code ++]
// page/products/_constant/url-parsers.ts: 목록 화면과 필터 대화상자가 사용한다.
// [!code ++]
export const urlParsers = {
	page: parseAsInteger.withDefault(pagination_default_page),
	keyword: parseAsString,
};
