// service/product/build-product-save-request.ts

// ----------------------------------------------------------------------------------------
// 상품 저장 요청, 서버 검증 기준으로 미리 정리
//
// [!code ++]
// name: 빈 문자열과 앞뒤 공백 불가
// [!code ++]
// price: 원 단위 정수만 허용
// [!code ++]
// tags: 한도 초과 시 저장 실패
// ----------------------------------------------------------------------------------------
export const buildProductSaveRequest = (draft: ProductDraft): ProductSaveRequest => ({
		name: draft.name.trim(),
		price: Math.round(draft.price),
		tags: draft.tags.slice(0, product_tag_limit),
	});
