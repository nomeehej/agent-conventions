export const ProductTableSection = () => {
	// ----------------------------------------------------------------------------------------
	// 상품 목록과 분류 목록 조회, 표 행으로 병합
	//
	// 분류 이름이 목록 응답에 없음 → 한 행에 두 응답 필요
	// ----------------------------------------------------------------------------------------
	const responseProductRowsSuspense = useSuspenseQueries({
		queries: [productListQueryOptions(), categoryListQueryOptions()],
		combine: ([productResult, categoryResult]) => {
			// 분류 응답의 id는 유일 → Map 키 충돌 없음
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
