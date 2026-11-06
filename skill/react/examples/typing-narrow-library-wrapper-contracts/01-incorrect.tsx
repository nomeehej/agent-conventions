// [!code error]
export type ButtonProps = MuiButtonProps;

export const Button = (props: ButtonProps) => {
	return <MuiButton {...props} />;
};
