/**
 * 표 줄
 *
 * 감싸는 컴포넌트의 프롭이 DOM 계약과 호환돼 `HTMLAttributes`를 그대로 받음
 */
export interface TableRowProps extends HTMLAttributes<HTMLTableRowElement> {
	/**
	 * 선택된 줄로 표시할지
	 */
	selected?: MuiTableRowProps["selected"];
}

export const TableRow = (props: TableRowProps) => {
	return (
		<MuiTableRow {...props} className={clsx("tableRow__root", props.className)} />
	);
};
