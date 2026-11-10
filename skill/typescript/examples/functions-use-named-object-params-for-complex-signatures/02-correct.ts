// ----------------------------------------------------------------------------------------
// 상품 목록 한 페이지 요청 조건
//
// page: 1부터 세는 페이지 번호
// keyword: 검색어. 비우면 전체 목록
// ----------------------------------------------------------------------------------------
interface ProductPageRequest {
	baseUrl: string;
	page: number;
	pageSize: number;
	keyword?: string;
}

const fetchProductPage = (request: ProductPageRequest): Promise<ProductPage> => {
	return client.get(`${request.baseUrl}/products`, {
		params: {page: request.page, pageSize: request.pageSize, keyword: request.keyword},
	});
};

fetchProductPage({baseUrl: api_base_url, page: urlParams.page, pageSize: pagination_default_page_size});
