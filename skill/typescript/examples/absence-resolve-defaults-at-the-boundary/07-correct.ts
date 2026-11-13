// page/product-list/product-list-page.tsx

// ----------------------------------------------------------------------------------------
// 상품 검색 조회
//
// 응답에 rows가 없으면 여기서 빈 목록으로 채우므로 아래에서는 필수 값이다.
// ----------------------------------------------------------------------------------------
const responseProductSearchSuspense = useSuspenseQuery({
	...productSearchQueryOptions(),
	select: (response) => ({...response, rows: response.rows ?? []}),
});

const productIds = responseProductSearchSuspense.data.rows.map((row) => row.id);
