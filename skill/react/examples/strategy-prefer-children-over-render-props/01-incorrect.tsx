// component/ui/panel/panel.tsx
export interface PanelProps {
	renderHeader?: () => ReactNode;
	renderFooter?: () => ReactNode;
}

export const Panel = (props: PanelProps) => {
	return (
		<section className={clsx("panel__root")}>
			{props.renderHeader?.()}
			<ItemList />
			{props.renderFooter?.()}
		</section>
	);
};
