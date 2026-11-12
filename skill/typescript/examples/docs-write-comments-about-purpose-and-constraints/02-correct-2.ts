// service/product/fetch-product-tree.ts

// ----------------------------------------------------------------------------------------
// 상품 분류 트리
//
// [!code ++]
// 숨긴 분류까지 포함한 관리자용 전체 트리다.
// ----------------------------------------------------------------------------------------
export const fetchProductTree = async (): Promise<ProductTreeResponse> => await client.get("/products/tree");
