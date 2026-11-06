// [!code ++]
// page/product-detail/product-detail-page.tsx: ProductSummary를 만드는 경계에서 한 번만 포맷
const productSummary = {averageRate: formatPercent(responseProductSummarySuspense.data.changeRate)};
