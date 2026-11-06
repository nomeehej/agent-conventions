export const ProductRecommendationBoundary = () => {
	const queryErrorResetBoundary = useQueryErrorResetBoundary();

	return (
		<ErrorBoundary
			onReset={queryErrorResetBoundary.reset}
			fallbackRender={(fallbackProps) => (
				<InlineErrorState
					retryLabel="다시 불러오기"
					onRetry={fallbackProps.resetErrorBoundary}
				/>
			)}
		>
			<Suspense fallback={<RecommendationSkeleton />}>
				<ProductRecommendationSection />
			</Suspense>
		</ErrorBoundary>
	);
};
