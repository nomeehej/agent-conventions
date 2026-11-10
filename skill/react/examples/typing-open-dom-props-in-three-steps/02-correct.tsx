import {Button as MuiButton} from "@mui/material";
import type {ButtonProps as MuiButtonProps} from "@mui/material";
import {clsx} from "clsx";
import type {ButtonHTMLAttributes} from "react";

// ----------------------------------------------------------------------------------------
// 라이브러리 버튼의 강조 단계를 여는 계약
//
// color의 문자열 리터럴은 DOM의 string에 할당 가능
// Omit 불필요
// ----------------------------------------------------------------------------------------
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	color?: MuiButtonProps["color"];
}

export const Button = (props: ButtonProps) => {
	return <MuiButton {...props} className={clsx("button__root", props.className)} />;
};
