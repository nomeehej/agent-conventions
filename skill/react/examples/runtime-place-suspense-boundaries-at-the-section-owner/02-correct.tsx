// page/products/products-page.tsx: 쿼리를 부르는 내용물 위에 경계 추가
return (
	<Suspense fallback={<ProductTreeSkeleton />}>
		<ProductTreeSection />
	</Suspense>
);
