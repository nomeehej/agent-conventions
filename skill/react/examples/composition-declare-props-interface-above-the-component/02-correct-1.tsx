// component/ui/badge/badge.tsx
export interface BadgeProps {
	label: string;
}

export const Badge = (props: BadgeProps) => {
	return <span className={clsx("badge__root")}>{props.label}</span>;
};
