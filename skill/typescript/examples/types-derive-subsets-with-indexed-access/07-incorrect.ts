// [!code error]
// 원본에서 TableCellProps.align은 선택 필드이고 padding은 normal, checkbox, none이다.

// ----------------------------------------------------------------------------------------
// 주문 내보내기 표 칸 표시 계약
//
//   padding
//      칸 여백이다. checkbox 칸은 없다.
// ----------------------------------------------------------------------------------------
interface OrderExportCell {
// [!code error]
	align: "inherit" | "left" | "center" | "right" | "justify";
// [!code error]
	padding?: "normal" | "none";
}
