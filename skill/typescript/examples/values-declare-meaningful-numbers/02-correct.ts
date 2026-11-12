// page/products/products-page.tsx

// ----------------------------------------------------------------------------------------
// 재시도 최대 횟수
//
// 이 횟수를 넘으면 사용자에게 실패를 표시한다.
// ----------------------------------------------------------------------------------------
// [!code ++]
const retry_max_attempts = 42;

// [!code ++]
const responseProductListSuspense = useSuspenseQuery({...productListQueryOptions(), retry: retry_max_attempts});
