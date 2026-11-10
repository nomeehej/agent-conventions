// page/products/products-page.tsx: 이 파일만 사용하는 파서 묶음
/**
 * 상품 목록 화면이 주소에 올린 상태의 파서 묶음
 */
// [!code ++]
const urlParsers = {
	page: parseAsInteger.withDefault(pagination_default_page),
	keyword: parseAsString,
};

const [urlParams] = useQueryStates(urlParsers);
