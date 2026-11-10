// page/orders/_function/to-summary-rows.ts
// [!code error]
export const toSummaryRows = (params: ToSummaryRowsParams): SummaryRow[] => {
// [!code error]
	return params.response.items.map((item) => ({id: item.id, label: item.name.trim() || params.emptyLabel}));
// [!code error]
};

// ----------------------------------------------------------------------------------------
// 요약 표 행을 만들 때 필요한 입력
//
// emptyLabel: 이름이 빈 항목에 표시할 문구
// ----------------------------------------------------------------------------------------
export interface ToSummaryRowsParams {
	response: OrderSummaryResponse;
	emptyLabel: string;
}
