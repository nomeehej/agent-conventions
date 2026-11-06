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
				"tooltip__root",
// [!code ++]
				props.variant === "fit" && "tooltip__root--fit",
// [!code ++]
				props.variant === "plain" && "tooltip__root--plain",
// [!code ++]
			)}
// [!code ++]
		>
			{props.children}
		</div>
	);
};
