// page/products/products-page.tsx: 함께 채워지는 요약 줄과 목록을 컴포넌트 둘로 나눠 같은 쿼리를 따로 부름
export const ProductsPage = () => {
	return (
		<Suspense fallback={<ScreenSkeleton />}>
			{/* [!code error] */}
			<ProductListTotal />
			{/* [!code error] */}
			<ProductListTable />
		</Suspense>
	);
};
