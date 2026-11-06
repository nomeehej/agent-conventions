const ProductPanel = (props: ProductPanelProps) => {
	if (!props.isVisible) {
		return null;
	}

	return <section className={clsx("productPanel__root")}>{props.children}</section>;
};
