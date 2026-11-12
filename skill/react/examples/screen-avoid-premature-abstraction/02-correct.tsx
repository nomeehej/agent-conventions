export const ProductListTable = (props: ProductListTableProps) => {
	// ----------------------------------------------------------------------------------------
	// 상품 목록 조회
	//
	// 링크에 필요한 두 필드로 가공해 표에 응답 구조를 드러내지 않는다.
	// ----------------------------------------------------------------------------------------
	const responseProductListSuspense = useProductListSuspense(
		{},
		{query: {select: (response) => response.data.items.map((product) => ({id: product.id, name: product.name}))}},
	);

	return responseProductListSuspense.data.map((row) => (
		<a href={`${props.editHrefBase}${row.id}/`} key={row.id}>
			{row.name}
		</a>
	));
};
