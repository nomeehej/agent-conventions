// component/ui/badge/badge.tsx
/**
 * 상태 배지 계약
 */
export interface BadgeProps {
	label: string;
}

export const Badge = (props: BadgeProps) => {
	return <span className={clsx("badge__root")}>{props.label}</span>;
};
