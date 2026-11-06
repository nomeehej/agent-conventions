export const Collapse = (props: CollapseProps) => {
// [!code ++]
	const isCompact = props.variant === "compact";

	return (
// [!code ++]
		<div className={clsx("collapse__root", props.className)}>
{/* [!code ++] */}
			<button className={clsx("collapse__header", isCompact && "collapse__header--compact")} type="button">
{/* [!code ++] */}
				<span className={clsx("collapse__title", isCompact && "collapse__title--compact")}>{props.title}</span>
			</button>
			<div className={clsx("collapse__content")}>{props.children}</div>
		</div>
	);
};
