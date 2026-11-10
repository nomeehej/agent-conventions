/**
 * 라벨과 보조 설명을 붙인 입력 한 줄
 */
export interface FieldProps {
	/**
	 * 최상위에 얹을 클래스
	 */
	className?: string;
	label: string;
	helperText?: string;
	/**
	 * 라벨과 입력을 잇는 id
	 */
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
