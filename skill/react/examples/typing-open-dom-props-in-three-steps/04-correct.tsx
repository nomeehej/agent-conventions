import {TextField as MuiTextField} from "@mui/material";
import type {TextFieldProps as MuiTextFieldProps} from "@mui/material";
import {clsx} from "clsx";
import type {ChangeEventHandler} from "react";

// ----------------------------------------------------------------------------------------
// 겉은 `div`, 이벤트는 안쪽 `input`이 수신 → 요소 전용 타입 사용 불가
//
// label은 선택적인 ReactNode 대신 필수 문자열 → 입력 이름 노출 보장
// ----------------------------------------------------------------------------------------
export interface TextFieldProps {
	label: string;
	className?: string;
	id?: string;
	value: string;
	onChange: ChangeEventHandler<HTMLInputElement>;
	error?: MuiTextFieldProps["error"];
}

export const TextField = (props: TextFieldProps) => (
		<MuiTextField
			className={clsx("textField__root", props.className)}
			id={props.id}
			label={props.label}
			value={props.value}
			onChange={props.onChange}
			error={props.error}
		/>
	);
