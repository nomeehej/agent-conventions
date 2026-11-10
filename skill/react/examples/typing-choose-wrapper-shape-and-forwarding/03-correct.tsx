// ----------------------------------------------------------------------------------------
// 라벨과 보조 설명을 붙인 입력 한 줄
//
// className: 최상위에 얹을 클래스
// inputId: 라벨과 입력을 잇는 id
// ----------------------------------------------------------------------------------------
export interface FieldProps {
	className?: string;
	label: string;
	helperText?: string;
	inputId: string;
	value: string;
	onChange: ChangeEventHandler<HTMLInputElement>;
}

export const Field = (props: FieldProps) => {
	return (
		<div className={clsx("field__root", props.className)}>
			<label className={clsx("field__label")} htmlFor={props.inputId}>
				{props.label}
			</label>
			<input id={props.inputId} value={props.value} onChange={props.onChange} />
			{props.helperText && <span className={clsx("field__helper")}>{props.helperText}</span>}
		</div>
	);
};
