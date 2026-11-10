// page/products/_product-list-table.tsx
/**
 * 상품들을 표에 그릴 형태로
 */
const responseProductListSuspense = useGetProductListSuspense(
	{page: urlParams.page},
	{ query: { select: (response: ProductListResponseDTO) => toProductRows(response) } },
);
