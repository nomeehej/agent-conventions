import {Button as MuiButton} from "@mui/material";
import type {ButtonProps as MuiButtonProps} from "@mui/material";
import {clsx} from "clsx";
import type {ButtonHTMLAttributes} from "react";

/**
 * 버튼 래퍼 계약
 *
 * `type`, `id`, `aria-*`, 이벤트는 DOM 속성으로 열고 sx, classes, component 같은 스타일 주입 지점은 열지 않음
 */
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	/**
	 * 강조 색
	 */
	color?: MuiButtonProps["color"];
	/**
	 * 강조 수준
	 */
	variant?: MuiButtonProps["variant"];
	/**
	 * 크기
	 */
	size?: MuiButtonProps["size"];
}

export const Button = (props: ButtonProps) => {
	return <MuiButton {...props} className={clsx("button__root", props.className)} />;
};
