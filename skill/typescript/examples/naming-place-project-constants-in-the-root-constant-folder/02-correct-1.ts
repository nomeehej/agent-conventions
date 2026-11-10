// page/products/products-page.tsx
// [!code ++]
import {pagination_default_page_size} from "@/constant/pagination";

const productQuery = useProductQuery({client, pageSize: pagination_default_page_size});
