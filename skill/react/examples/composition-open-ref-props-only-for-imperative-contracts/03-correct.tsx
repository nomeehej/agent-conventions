// ----------------------------------------------------------------------------------------
// `ref` 비공개
//
// 밖에서 다룰 일이 없다.
// ----------------------------------------------------------------------------------------
export interface StatusBadgeProps {
	label: string;
}

export const StatusBadge = (props: StatusBadgeProps) => <span>{props.label}</span>;
