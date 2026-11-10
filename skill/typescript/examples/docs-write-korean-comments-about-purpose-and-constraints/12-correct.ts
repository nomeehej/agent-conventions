// page/products/_product-list-table.tsx
/**
 * 상품 목록 조회, 표 행 가공
 * {@link /api/product}
 */
const responseProductListSuspense = useGetProductListSuspense(
	{page: urlParams.page},
	{ query: { select: (response: ProductListResponseDTO) => toProductRows(response) } },
);
