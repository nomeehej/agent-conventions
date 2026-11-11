// page/products/product-sidebar-panel.tsx: 감싸기만 하고 표의 표시가 없음
// [!code error]
export const ProductSidebarPanel = (props: ProductSidebarPanelProps) => {
	return <section className={clsx("productSidebarPanel__root")}>{props.children}</section>;
};
