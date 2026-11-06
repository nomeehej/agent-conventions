// id, role, tabIndex, aria-*, 이벤트를 전부 잃고 다섯 개만 남음
export interface ButtonProps {
	className?: string;
	children?: ReactNode;
	color?: MuiButtonProps["color"];
	disabled?: MuiButtonProps["disabled"];
	onClick?: MouseEventHandler<HTMLButtonElement>;
}
