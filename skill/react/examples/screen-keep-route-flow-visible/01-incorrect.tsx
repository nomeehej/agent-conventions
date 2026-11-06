// page/products/products-page.tsx
export const ProductsPage = () => {
// [!code error]
	const [urlParams] = useQueryStates(productUrlParsers);
// [!code error]
	const responseProductListSuspense = useProductListSuspense({page: urlParams.page});

	return (
		<Fragment>
			<ProductFilterSection />
// [!code error]
			<ProductListSection products={responseProductListSuspense.data.items} />
		</Fragment>
	);
};
