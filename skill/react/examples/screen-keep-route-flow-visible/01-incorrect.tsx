// page/products/products-page.tsx
export const ProductsPage = () => {
// [!code error]
	const [urlParams] = useQueryStates(urlParsers);
// [!code error]
	const responseProductListSuspense = useProductListSuspense({page: urlParams.page});

	return (
		<Fragment>
			<ProductFilterBar />
// [!code error]
			<ProductListSection products={responseProductListSuspense.data.items} />
		</Fragment>
	);
};
