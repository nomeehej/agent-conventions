// util/array/to-sorted-product-refs.ts
/**
 * 검토 목록 순서 고정
 */
export const toSortedProductRefs = (refs: ProductRef[]): ProductRef[] => {
	return sortBy(uniq(refs), [(ref) => ref.id]);
};
