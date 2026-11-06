export interface ButtonProps {
	variant?: MuiButtonProps["variant"];
	className?: string;
}

export const Button = (props: ButtonProps) => {
// [!code ++]
	return <MuiButton className={clsx("button__root", props.className)} variant={props.variant} />;
};
