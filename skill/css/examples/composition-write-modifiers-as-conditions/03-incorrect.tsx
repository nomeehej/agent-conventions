export interface ButtonProps {
	variant?: MuiButtonProps["variant"];
	className?: string;
}

export const Button = (props: ButtonProps) => {
// [!code error]
	return <MuiButton className={clsx("button__root", `button__root--${props.variant}`, props.className)} />;
};
