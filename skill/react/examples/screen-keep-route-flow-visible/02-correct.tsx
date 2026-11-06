// page/products/products-page.tsx
export const ProductsPage = () => {
	return (
		<Fragment>
			<ProductFilterSection />
{/* [!code ++] */}
			<Suspense fallback={<LoadingFallback ariaLabel="product 목록을 불러오는 중" />}>
{/* [!code ++] */}
				<ProductListSection />
{/* [!code ++] */}
			</Suspense>
		</Fragment>
	);
};
