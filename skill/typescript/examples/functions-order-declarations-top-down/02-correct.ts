// page/orders/_function/to-summary-rows.ts
/**
 * 요약 표 행을 만들 때 필요한 입력
 */
export interface ToSummaryRowsParams {
	response: OrderSummaryResponse;
	/**
	 * 이름이 빈 항목에 표시할 문구
	 */
	emptyLabel: string;
}

// [!code ++]
/**
 * 요약 표가 그리는 행 목록. 이름이 비면 `emptyLabel`로 표시
 */
// [!code ++]
export const toSummaryRows = (params: ToSummaryRowsParams): SummaryRow[] => {
// [!code ++]
	return params.response.items.map((item) => ({id: item.id, label: item.name.trim() || params.emptyLabel}));
// [!code ++]
};
