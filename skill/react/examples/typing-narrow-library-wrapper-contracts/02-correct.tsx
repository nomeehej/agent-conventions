import {Button as MuiButton} from "@mui/material";
import type {ButtonProps as MuiButtonProps} from "@mui/material";
import type {MouseEventHandler, ReactNode} from "react";

/**
 * 버튼 래퍼 계약
 *
 * sx, classes, component 같은 스타일 주입 지점은 열지 않음
 */
export interface ButtonProps {
	children: ReactNode;
	/**
	 * 강조 수준
	 */
	variant?: MuiButtonProps["variant"];
	/**
	 * 크기
	 */
	size?: MuiButtonProps["size"];
	/**
	 * 요청이 끝날 때까지 눌리지 않음
	 */
	isLoading?: boolean;
	onClick?: MouseEventHandler<HTMLButtonElement>;
}

export const Button = (props: ButtonProps) => {
	return (
		<MuiButton variant={props.variant} size={props.size} disabled={props.isLoading} onClick={props.onClick}>
			{props.children}
		</MuiButton>
	);
};
