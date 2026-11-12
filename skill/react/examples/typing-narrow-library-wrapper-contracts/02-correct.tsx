import {Button as MuiButton} from "@mui/material";
import type {ButtonProps as MuiButtonProps} from "@mui/material";
import {clsx} from "clsx";
import type {ButtonHTMLAttributes} from "react";

// ----------------------------------------------------------------------------------------
// 버튼 래퍼 계약, DOM 속성은 개방하고 스타일 주입 지점은 닫음
//
// 개방: `type`, `id`, `aria-*`, 이벤트
// 닫음: sx, classes, component
// ----------------------------------------------------------------------------------------
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	color?: MuiButtonProps["color"];
	variant?: MuiButtonProps["variant"];
	size?: MuiButtonProps["size"];
}

export const Button = (props: ButtonProps) => <MuiButton {...props} className={clsx("button__root", props.className)} />;
