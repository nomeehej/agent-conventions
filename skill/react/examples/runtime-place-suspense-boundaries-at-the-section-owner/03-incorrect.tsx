// page/products/product-tree-section.tsx: 진입 파일에 경계가 있는데 같은 쿼리를 또 감싼다.
export const ProductTreeSection = () => {
	return (
		<Suspense fallback={<ProductTreeSkeleton />}>
			<ProductTreeInner />
		</Suspense>
	);
};
