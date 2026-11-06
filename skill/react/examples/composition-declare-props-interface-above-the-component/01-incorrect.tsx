// component/ui/badge/badge.tsx: 칩까지 한 파일에 두고 타입은 위쪽에 모음
interface BadgeProps {
	label: string;
}

interface ChipProps {
	label: string;
}

export const Badge = (props: BadgeProps) => {
	return <span className={clsx("badge__root")}>{props.label}</span>;
};

export const Chip = (props: ChipProps) => {
	return <span className={clsx("chip__root")}>{props.label}</span>;
};
