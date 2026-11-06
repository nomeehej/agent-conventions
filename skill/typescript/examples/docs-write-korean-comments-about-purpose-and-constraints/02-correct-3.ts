// page/products/_product-tree-section.tsx
/**
 * 상품 트리 입력 계약
 */
export interface ProductTreeSectionProps {
// [!code ++]
	/**
	 * 사이드바 표시용 분류 노드 목록
	 */
	categoryNodes: ProductCategoryNode[];
}
