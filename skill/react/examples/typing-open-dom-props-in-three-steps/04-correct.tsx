import {TextField as MuiTextField} from "@mui/material";
import type {TextFieldProps as MuiTextFieldProps} from "@mui/material";
import {clsx} from "clsx";
import type {ChangeEventHandler} from "react";

// ----------------------------------------------------------------------------------------
// 텍스트 필드 프롭
//
// 겉은 `div`이고 이벤트는 안쪽 `input`이 받으므로 요소 전용 타입을 쓸 수 없다.
//
// label은 선택적인 ReactNode 대신 필수 문자열이라 입력 이름이 반드시 노출된다.
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
