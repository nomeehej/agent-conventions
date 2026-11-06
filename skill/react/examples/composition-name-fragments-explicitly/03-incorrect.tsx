export const ProductListRows = (props: ProductListRowsProps) => {
	return props.products.map((product) => (
// [!code error]
		<>
			<ProductListRow product={product} />
			<ProductListRowDivider />
// [!code error]
		</>
	));
};
