// ----------------------------------------------------------------------------------------
// 아이콘만 있는 버튼, 이름은 `label`을 `aria-label`로 전달
//
// `icon`과 `label`은 안쪽 컴포넌트가 모르는 자기 프롭 → 타입 직접 선언
// `disabled`는 라이브러리 프롭에 있음 → 인덱스 접근으로 참조
// ----------------------------------------------------------------------------------------
export interface IconButtonProps {
	className?: string;
	icon: ReactNode;
	label: string;
	disabled?: MuiButtonProps["disabled"];
	onClick?: MouseEventHandler<HTMLButtonElement>;
}

export const IconButton = (props: IconButtonProps) => (
		<MuiButton
			className={clsx("iconButton__root", props.className)}
			aria-label={props.label}
			disabled={props.disabled}
			onClick={props.onClick}
		>
			{props.icon}
		</MuiButton>
	);
