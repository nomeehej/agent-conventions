// component/ui/chip/chip.tsx
/**
 * 칩 계약
 */
export interface ChipProps {
	/**
	 * 칩에 표시할 문구
	 */
	label: string;
}

export const Chip = (props: ChipProps) => {
	return <span className={clsx("chip__root")}>{props.label}</span>;
};
