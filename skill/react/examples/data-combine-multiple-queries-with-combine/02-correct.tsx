export const ProductTableSection = () => {
	// ----------------------------------------------------------------------------------------
	// 상품 목록과 분류 목록 조회, 표 행으로 병합
	//
	// 분류 이름이 목록 응답에 없음 → 한 행에 두 응답 필요
	// ----------------------------------------------------------------------------------------
	const responseProductRowsSuspense = useSuspenseQueries({
		queries: [productListQueryOptions(), categoryListQueryOptions()],
		combine: ([productResult, categoryResult]) => {
			// 분류 응답의 id는 유일
			// 모든 행이 같은 분류 목록 조회, Map은 한 번만 생성
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
