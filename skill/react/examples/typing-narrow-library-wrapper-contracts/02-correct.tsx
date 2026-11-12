import {Button as MuiButton} from "@mui/material";
import type {ButtonProps as MuiButtonProps} from "@mui/material";
import {clsx} from "clsx";
import type {ButtonHTMLAttributes} from "react";

// ----------------------------------------------------------------------------------------
// 버튼 래퍼 계약
//
// DOM 속성은 열고 스타일 주입 지점은 닫는다.
//
//   개방
//      `type`, `id`, `aria-*`, 이벤트를 받는다.
//
//   닫음
//      sx, classes, component는 받지 않는다.
// ----------------------------------------------------------------------------------------
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	color?: MuiButtonProps["color"];
	variant?: MuiButtonProps["variant"];
	size?: MuiButtonProps["size"];
}

export const Button = (props: ButtonProps) => <MuiButton {...props} className={clsx("button__root", props.className)} />;
