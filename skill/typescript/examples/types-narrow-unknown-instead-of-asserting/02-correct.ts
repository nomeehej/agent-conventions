const storedValue = localStorage.getItem("product-filter");
const parsedFilter: unknown = storedValue === null ? undefined : JSON.parse(storedValue);

// 첫 방문이라 저장된 필터가 없거나 형태가 다르면 폐기하고 undefined로 둔다.
const storedFilter = isProductFilter(parsedFilter) ? parsedFilter : undefined;
