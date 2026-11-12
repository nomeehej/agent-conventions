import {TableCell as MuiTableCell} from "@mui/material";
import type {TableCellProps as MuiTableCellProps} from "@mui/material";
import {clsx} from "clsx";
import type {TdHTMLAttributes} from "react";

// ----------------------------------------------------------------------------------------
// align 프롭
//
// inherit은 DOM td 타입에 없으므로 그 이름만 제외하고 다시 선언한다.
// ----------------------------------------------------------------------------------------
export interface TableCellProps extends Omit<TdHTMLAttributes<HTMLTableCellElement>, "align"> {
	align?: MuiTableCellProps["align"];
	padding?: MuiTableCellProps["padding"];
}

export const TableCell = (props: TableCellProps) => <MuiTableCell {...props} className={clsx("tableCell__root", props.className)} />;
