// [!code ++]
// page/product-detail/_product-table-section.tsx
// [!code ++]
export const ProductTableSection = (props: ProductTableSectionProps) => {
	return <section className={clsx("productTableSection__root")}>{props.children}</section>;
};
