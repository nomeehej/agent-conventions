import {Button as MuiButton} from "@mui/material";
import type {ButtonProps as MuiButtonProps} from "@mui/material";
import {clsx} from "clsx";
import type {ButtonHTMLAttributes} from "react";

// ----------------------------------------------------------------------------------------
// color 프롭
//
// 문자열 리터럴이라 DOM의 string에 할당할 수 있으므로 Omit이 필요 없다.
// ----------------------------------------------------------------------------------------
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	color?: MuiButtonProps["color"];
}

export const Button = (props: ButtonProps) => <MuiButton {...props} className={clsx("button__root", props.className)} />;
