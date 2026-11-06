// page/products/_product-sidebar-panel.tsx: 감싸기만 하고 자기 책임 없음
export const ProductSidebarPanel = (props: ProductSidebarPanelProps) => {
	return <section className={clsx("productsPage__sidebar")}>{props.children}</section>;
};
