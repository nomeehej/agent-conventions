// page/product-detail/product-detail-page.tsx: 서버는 계산 전이면 null. 여기서 한 번 제한
const responseSummarySuspense = useSuspenseQuery({
	...productDetailSummaryQueryOptions(productId),
	select: (response) => ({
		...response,
		changeRate: isNotNil(response.changeRate) ? response.changeRate : undefined,
	}),
});
