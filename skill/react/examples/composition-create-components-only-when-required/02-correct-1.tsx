// page/products/products-page.tsx
export const ProductsPage = () => {
	return (
		<Suspense fallback={<ScreenSkeleton />}>
			{/* [!code ++] */}
			<ProductListSection />
		</Suspense>
	);
};
