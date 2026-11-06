export interface TooltipProps {
	variant?: "fit" | "plain";
	children: ReactNode;
}

export const Tooltip = (props: TooltipProps) => {
	return (
// [!code error]
		<div className={clsx("tooltip__root", props.variant && `tooltip__root--${props.variant}`)}>
			{props.children}
		</div>
	);
};
