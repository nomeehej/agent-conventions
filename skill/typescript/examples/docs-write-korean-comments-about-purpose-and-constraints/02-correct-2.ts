// service/product/fetch-product-tree.ts

// ----------------------------------------------------------------------------------------
// [!code ++]
// 상품 분류 트리 조회, 숨긴 분류도 포함한 관리자용 전체 트리
// ----------------------------------------------------------------------------------------
export const fetchProductTree = async (): Promise<ProductTreeResponse> => {
	return await client.get("/products/tree");
};
