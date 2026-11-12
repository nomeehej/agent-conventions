// page/products/product-sidebar-panel.tsx: 감싸기만 하고 표시할 것이 없다.
// [!code error]
export const ProductSidebarPanel = (props: ProductSidebarPanelProps) => {
	return <section className={clsx("productSidebarPanel__root")}>{props.children}</section>;
};
