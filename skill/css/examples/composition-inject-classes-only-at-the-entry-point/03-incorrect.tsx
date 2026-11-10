export const Collapse = (props: CollapseProps) => {
	return (
// [!code error]
		<div className={clsx("collapse__root")}>
{/* [!code error] */}
			<button className={clsx("collapse__header", props.className)} type="button">
				{props.title}
			</button>
			<div className={clsx("collapse__content")}>{props.children}</div>
		</div>
	);
};
