const storedValue = localStorage.getItem("product-filter");
const parsedFilter: unknown = storedValue === null ? undefined : JSON.parse(storedValue);

// 첫 방문이면 저장된 필터 없음
// 형태가 다르면 폐기
const storedFilter = isProductFilter(parsedFilter) ? parsedFilter : undefined;
