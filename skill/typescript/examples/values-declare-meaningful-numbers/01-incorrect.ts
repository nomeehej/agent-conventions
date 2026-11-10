// page/products/products-page.tsx
// [!code error]
const responseProductListSuspense = useSuspenseQuery({...productListQueryOptions(), retry: 42});
