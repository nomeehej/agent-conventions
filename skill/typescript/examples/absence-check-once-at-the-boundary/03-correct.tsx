// page/product-detail/product-detail-page.tsx

// ----------------------------------------------------------------------------------------
// 상품 요약 조회
//
// 계산에 쓰기 전에 변화율의 null을 undefined로 바꾼다.
// ----------------------------------------------------------------------------------------
const responseSummarySuspense = useSuspenseQuery({
	...productDetailSummaryQueryOptions(productId),
	select: (response) => ({
		...response,
		changeRate: isNotNil(response.changeRate) ? response.changeRate : undefined,
	}),
});
