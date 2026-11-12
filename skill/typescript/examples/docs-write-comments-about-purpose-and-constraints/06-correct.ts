// service/product/build-product-save-request.ts

// ----------------------------------------------------------------------------------------
// 상품 저장 요청
//
// 서버 검증을 통과하도록 보내기 전에 정리한다.
//
// [!code ++]
//   name
// [!code ++]
//      빈 문자열과 앞뒤 공백은 받지 않는다.
//
//   price
//      원 단위 정수만 받는다.
//
//   tags
//      한도를 넘기면 저장 자체가 실패한다.
// ----------------------------------------------------------------------------------------
export const buildProductSaveRequest = (draft: ProductDraft): ProductSaveRequest => ({
	name: draft.name.trim(),
	price: Math.round(draft.price),
	tags: draft.tags.slice(0, product_tag_limit),
});
