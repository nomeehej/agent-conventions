const ProductPanel = (props: ProductPanelProps) => {
// [!code error]
	return props.isVisible && <section className={clsx("productPanel__root")}>{props.children}</section>;
};
