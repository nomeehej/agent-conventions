// ----------------------------------------------------------------------------------------
// `ref` 비공개, 밖에서 다룰 일 없음
// ----------------------------------------------------------------------------------------
export interface StatusBadgeProps {
	label: string;
}

export const StatusBadge = (props: StatusBadgeProps) => {
	return <span>{props.label}</span>;
};
