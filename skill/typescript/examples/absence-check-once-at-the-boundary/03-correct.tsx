// page/product-detail/product-detail-page.tsx

// ----------------------------------------------------------------------------------------
// 상품 요약 조회, 계산 전 변화율 null을 undefined로 제한
//
// 엔드포인트: /api/product/summary
// ----------------------------------------------------------------------------------------
const responseSummarySuspense = useSuspenseQuery({
	...productDetailSummaryQueryOptions(productId),
	select: (response) => ({
		...response,
		changeRate: isNotNil(response.changeRate) ? response.changeRate : undefined,
	}),
});
