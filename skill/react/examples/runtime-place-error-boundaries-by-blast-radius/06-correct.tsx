// page/products/products-page.tsx
export const ProductsPage = () => {
	// ----------------------------------------------------------------------------------------
	// 상품 화면 구성
	//
	//   ProductRecommendationSection
	//      추천 목록을 그린다. 실패해도 본문 목록은 그대로 쓸 수 있다.
	//
	//   ProductListSection
	//      상품 목록과 분류 트리를 그린다.
	//      실패는 라우트 프레임의 화면 경계가 처리한다.
	// ----------------------------------------------------------------------------------------
	return (
		<div className={clsx("productsPage__layout")}>
			<ErrorBoundary fallback={<InlineErrorState />}>
				<Suspense fallback={<RecommendationSkeleton />}>
					<ProductRecommendationSection />
				</Suspense>
			</ErrorBoundary>

			<Suspense fallback={<ProductListSkeleton />}>
				<ProductListSection />
			</Suspense>
		</div>
	);
};
