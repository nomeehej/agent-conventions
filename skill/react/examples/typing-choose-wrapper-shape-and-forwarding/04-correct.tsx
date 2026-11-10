// ----------------------------------------------------------------------------------------
// 표 줄
//
// 감싸는 컴포넌트의 프롭이 DOM 계약과 호환
// `HTMLAttributes` 직접 상속
// ----------------------------------------------------------------------------------------
export interface TableRowProps extends HTMLAttributes<HTMLTableRowElement> {
	selected?: MuiTableRowProps["selected"];
}

export const TableRow = (props: TableRowProps) => {
	return (
		<MuiTableRow {...props} className={clsx("tableRow__root", props.className)} />
	);
};
