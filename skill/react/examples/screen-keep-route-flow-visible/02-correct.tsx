// page/products/products-page.tsx
export const ProductsPage = () => {
	return (
		<Fragment>
			<ProductFilterBar />
{/* [!code ++] */}
			<Suspense fallback={<ProductListSkeleton />}>
{/* [!code ++] */}
				<ProductListSection />
{/* [!code ++] */}
			</Suspense>
		</Fragment>
	);
};
