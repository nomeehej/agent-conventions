// page/products/products-page.tsx: 쿼리를 부르는 섹션을 경계로 감쌈
return (
	<Suspense fallback={<ProductTreeSkeleton />}>
		<ProductTreeSection />
	</Suspense>
);
