// service/product/save-product.ts

// [!code error]
// 상품 저장 요청, 응답 본문 없이 상태 코드로만 성공 확인
export const saveProduct = async (product: Product): Promise<void> => {
	await client.post("/products", product);
};
