// service/product/fetch-product-list.ts

// [!code ++]
// ----------------------------------------------------------------------------------------
// 상품 목록
//
// 조회 실패 처리는 호출부가 맡는다.
// ----------------------------------------------------------------------------------------
export const fetchProductList = async (): Promise<Product[]> => await client.get("/products");
