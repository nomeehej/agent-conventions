export const ProductTableSection = () => {
	// ----------------------------------------------------------------------------------------
	// 상품 목록과 분류 목록 조회
	//
	// 분류 이름이 목록 응답에 없으므로 두 응답을 표 행으로 병합한다.
	// ----------------------------------------------------------------------------------------
	const responseProductRowsSuspense = useSuspenseQueries({
		queries: [productListQueryOptions(), categoryListQueryOptions()],
		combine: ([productResult, categoryResult]) => {
			// 분류 응답의 id는 유일하므로 Map 키가 충돌하지 않는다.
			const categoryById = new Map(categoryResult.data.categories.map((category) => [category.id, category]));

			return {
				rows: productResult.data.items.map((product) => ({
					id: product.id,
					name: product.name,
					categoryName: categoryById.get(product.categoryId)?.name,
				})),
			};
		},
	});

	return <Table rows={responseProductRowsSuspense.rows} />;
};
