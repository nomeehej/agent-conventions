// ----------------------------------------------------------------------------------------
// 주문 내보내기 표 칸 표시 계약
//
// align과 padding은 TableCell로 그대로 전달한다.
//
//   align
//      칸 정렬이다. TableCell에서는 선택 필드지만 이 표는 칸마다 필수로 둔다.
//
//   padding
//      칸 여백이다. normal과 none만 받고 checkbox 칸은 없다.
// ----------------------------------------------------------------------------------------
interface OrderExportCell {
// [!code ++]
	align: NonNullable<TableCellProps["align"]>;
// [!code ++]
	padding?: Extract<TableCellProps["padding"], "normal" | "none">;
}
