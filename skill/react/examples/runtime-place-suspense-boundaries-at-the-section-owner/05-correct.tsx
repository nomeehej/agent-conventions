// page/products/_product-tree-section.tsx
export const ProductTreeSection = () => {
	// ----------------------------------------------------------------------------------------
	// 사이드바 분류 트리 조회
	//
	// 이 쿼리가 멈추는 동안은 진입 파일의 경계가 처리
	//
	// 엔드포인트: /api/product/tree
	// ----------------------------------------------------------------------------------------
	const responseProductTreeSuspense = useProductTreeSuspense();

	return <Tree items={responseProductTreeSuspense.data.categoryNodes} />;
};
