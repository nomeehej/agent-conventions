// page/product-detail/product-detail-page.tsx
// [!code ++]
// ProductSummary를 만드는 경계에서 한 번만 포맷한다.
const productSummary = {averageRate: formatPercent(responseProductSummarySuspense.data.changeRate)};
