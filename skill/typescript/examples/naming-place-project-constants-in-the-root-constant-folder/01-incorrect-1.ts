// page/products/products-page.tsx
// [!code error]
const pagination_default_page_size = 20;

const productQuery = useProductQuery({client, pageSize: pagination_default_page_size});
