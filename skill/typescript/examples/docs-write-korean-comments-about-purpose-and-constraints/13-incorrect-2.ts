// service/product/save-product.ts
// [!code error]
// 상품 저장 요청. 성공 확인은 상태 코드만, 응답 본문 없음
export const saveProduct = async (product: Product): Promise<void> => {
	await client.post("/products", product);
};
