// [!code error]
// 이 화면은 낡은 추천을 계속 보이면 안 되는데 재조회 실패를 던지지 않는다.
return <ProductRecommendations items={responseProductRecommendationsSuspense.data.items} />;
