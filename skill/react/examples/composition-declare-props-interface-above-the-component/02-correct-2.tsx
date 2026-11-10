// component/ui/chip/chip.tsx
export interface ChipProps {
	label: string;
}

export const Chip = (props: ChipProps) => {
	return <span className={clsx("chip__root")}>{props.label}</span>;
};
