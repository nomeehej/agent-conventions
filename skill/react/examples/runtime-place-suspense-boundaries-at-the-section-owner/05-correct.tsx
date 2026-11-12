// page/products/product-tree-section.tsx
export const ProductTreeSection = () => {
	// ----------------------------------------------------------------------------------------
	// 사이드바 분류 트리 조회
	//
	// 멈추는 동안은 진입 파일의 경계가 처리한다.
	// ----------------------------------------------------------------------------------------
	const responseProductTreeSuspense = useProductTreeSuspense();

	return <Tree items={responseProductTreeSuspense.data.categoryNodes} />;
};
