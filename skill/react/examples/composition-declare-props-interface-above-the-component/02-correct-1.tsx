// component/ui/badge/badge.tsx
/**
 * 상태 배지 계약
 */
export interface BadgeProps {
	/**
	 * 배지에 표시할 문구
	 */
	label: string;
}

export const Badge = (props: BadgeProps) => {
	return <span className={clsx("badge__root")}>{props.label}</span>;
};
