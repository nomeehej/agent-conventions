// page/orders/orders-page.tsx
// 다른 화면이 같은 값을 다시 선언한다.
// [!code error]
const pagination_default_page_size = 20;

const orderQuery = useOrderQuery({pageSize: pagination_default_page_size});
