export interface TooltipProps {
	variant?: "fit" | "plain";
	children: ReactNode;
}

export const Tooltip = (props: TooltipProps) => {
	return (
// [!code ++]
		<div
// [!code ++]
			className={clsx(
// [!code ++]
				"tooltip__body",
// [!code ++]
				props.variant === "fit" && "tooltip__body--fit",
// [!code ++]
				props.variant === "plain" && "tooltip__body--plain",
// [!code ++]
			)}
// [!code ++]
		>
			{props.children}
		</div>
	);
};
