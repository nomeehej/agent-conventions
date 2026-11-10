// page/products/products-page.tsx

// ----------------------------------------------------------------------------------------
// 이 횟수를 넘으면 사용자에게 실패 표시
// ----------------------------------------------------------------------------------------
// [!code ++]
const retry_max_attempts = 42;

// [!code ++]
const responseProductListSuspense = useSuspenseQuery({...productListQueryOptions(), retry: retry_max_attempts});
