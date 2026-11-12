// page/products/products-page.tsx: 이 파일만 사용하는 파서 묶음이다.
// [!code ++]
const urlParsers = {
	page: parseAsInteger.withDefault(pagination_default_page),
	keyword: parseAsString,
};

const [urlParams] = useQueryStates(urlParsers);
