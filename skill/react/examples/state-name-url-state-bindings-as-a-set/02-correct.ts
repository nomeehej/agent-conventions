// [!code ++]
// page/products/_constant/url-parsers.ts
/**
 * 상품 목록 화면이 주소에 올린 상태의 파서 묶음
 */
// [!code ++]
export const urlParsers = {
	page: parseAsInteger.withDefault(pagination_default_page),
	keyword: parseAsString,
};
