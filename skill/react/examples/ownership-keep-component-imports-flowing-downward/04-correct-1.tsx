// component/widget/product-table/product-table.tsx
export const ProductTable = (props: ProductTableProps) => {
	return <section className={clsx("productTable__root")}>{props.children}</section>;
};
