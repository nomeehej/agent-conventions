/**
 * 주문 내보내기 표 칸 표시 계약. align, padding은 TableCell로 그대로 전달
 */
interface OrderExportCell {
	/**
	 * 칸 정렬. TableCell은 선택 필드, 이 표는 칸마다 필수
	 */
// [!code ++]
	align: NonNullable<TableCellProps["align"]>;
	/**
	 * 칸 여백. normal, none만 허용, checkbox 칸 없음
	 */
// [!code ++]
	padding?: Extract<TableCellProps["padding"], "normal" | "none">;
}
