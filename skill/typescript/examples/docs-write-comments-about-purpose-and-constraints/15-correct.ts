// service/product/build-product-save-request.ts

// ----------------------------------------------------------------------------------------
// PRODUCT SAVE REQUEST
//
// Cleans the draft before sending so the request passes server validation.
//
//   name
//      Empty strings and surrounding spaces are rejected.
//
//   price
//      Only whole won amounts are accepted.
//
//   tags
//      Going over the limit makes the whole save fail.
// ----------------------------------------------------------------------------------------
export const buildProductSaveRequest = (draft: ProductDraft): ProductSaveRequest => ({
	name: draft.name.trim(),
	price: Math.round(draft.price),
	tags: draft.tags.slice(0, product_tag_limit),
});
