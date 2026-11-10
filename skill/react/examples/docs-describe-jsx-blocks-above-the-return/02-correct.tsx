// page/products/products-page.tsx
export const ProductsPage = () => {
	// [!code ++]
	// ----------------------------------------------------------------------------------------
	// 상품 목록 화면 구성
	//
	// productsPage__filter: 검색어 입력과 목록 보기 동작
	// ProductListSection: 목록 표와 쪽 이동, 쪽 번호는 URL 기준
	// ----------------------------------------------------------------------------------------
	return (
		<section className={clsx("productsPage__root")}>
			<div className={clsx("productsPage__filter")}>
				<ProductSearchField />
				<ProductBrowseActions />
			</div>
			<Suspense fallback={<ScreenSkeleton />}>
				<ProductListSection />
			</Suspense>
		</section>
	);
};
