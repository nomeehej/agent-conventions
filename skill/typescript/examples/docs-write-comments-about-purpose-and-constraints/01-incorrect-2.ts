// service/product/fetch-product-tree.ts

// ----------------------------------------------------------------------------------------
// [!code error]
// 상품 트리를 조회하는 함수
// ----------------------------------------------------------------------------------------
export const fetchProductTree = async (): Promise<ProductTreeResponse> => {
	return await client.get("/products/tree");
};
