export interface TooltipProps {
	variant?: "fit" | "plain";
	children: ReactNode;
}

export const Tooltip = (props: TooltipProps) => {
	return (
// [!code error]
		<div className={clsx("tooltip__body", props.variant && `tooltip__body--${props.variant}`)}>
			{props.children}
		</div>
	);
};
