export const ProductsPage = () => {
	return (
		<div className={clsx("productsPage__layout")}>
			<ProductTreeSection />

			<ErrorBoundary
				// 추천 목록이 실패해도 본문 표는 그대로 사용 가능
				fallback={<InlineErrorState />}
			>
				<Suspense fallback={<RecommendationSkeleton />}>
					<ProductRecommendationSection />
				</Suspense>
			</ErrorBoundary>

			<ProductTableSection />
		</div>
	);
};
