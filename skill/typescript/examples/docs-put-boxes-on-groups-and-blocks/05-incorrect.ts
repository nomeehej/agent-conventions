// util/number/format-quantity.ts

// ----------------------------------------------------------------------------------------
// [!code error]
// 수량 표시 문자열
//
// 천 단위 쉼표를 넣고 소수 둘째 자리까지 맞춘다.
// ----------------------------------------------------------------------------------------
export const formatQuantity = (quantity: number | null): string => {
	if (quantity === null) return empty_display_text;

	return quantity.toLocaleString("ko-KR", {minimumFractionDigits: 2, maximumFractionDigits: 2});
};
