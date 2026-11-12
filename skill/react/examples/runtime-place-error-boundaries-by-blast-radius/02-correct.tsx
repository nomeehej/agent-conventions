// 추천을 확정하는 화면은 재조회에 실패하면 이전 추천을 계속 선택하게 두지 않는다.
if (responseProductRecommendationsSuspense.error && !responseProductRecommendationsSuspense.isFetching) {
	throw responseProductRecommendationsSuspense.error;
}

return <ProductRecommendations items={responseProductRecommendationsSuspense.data.items} />;
