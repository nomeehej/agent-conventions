export interface CollapseProps {
	className?: string;
	children: ReactNode;
}

export const Collapse = (props: CollapseProps) => (
		<div className={clsx("collapse__root", props.className)}>{props.children}</div>
	);
