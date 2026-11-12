// ----------------------------------------------------------------------------------------
// DOM 계약과 호환되는 래퍼 프롭
//
// 감싸는 컴포넌트의 프롭이 DOM 계약과 호환되므로 `HTMLAttributes`를 직접 상속한다.
// ----------------------------------------------------------------------------------------
export interface TableRowProps extends HTMLAttributes<HTMLTableRowElement> {
	selected?: MuiTableRowProps["selected"];
}

export const TableRow = (props: TableRowProps) => (
		<MuiTableRow {...props} className={clsx("tableRow__root", props.className)} />
	);
