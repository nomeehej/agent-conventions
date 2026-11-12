export interface FieldProps {
	className?: string;
	label: string;
	helperText?: string;
	inputId: string;
	value: string;
	onChange: ChangeEventHandler<HTMLInputElement>;
}

export const Field = (props: FieldProps) => (
		<div className={clsx("field__root", props.className)}>
			<label className={clsx("field__label")} htmlFor={props.inputId}>
				{props.label}
			</label>
			<input id={props.inputId} value={props.value} onChange={props.onChange} />
			{props.helperText && <span className={clsx("field__helper")}>{props.helperText}</span>}
		</div>
	);
