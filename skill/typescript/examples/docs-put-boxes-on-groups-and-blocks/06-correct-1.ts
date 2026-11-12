// util/number/format-quantity.ts

// ----------------------------------------------------------------------------------------
// 수량 표시 문자열
//
// 천 단위 쉼표를 넣고 소수 둘째 자리까지 맞춘다.
//
// [!code ++]
// formatQuantity(1234) → "1,234.00"
// [!code ++]
// formatQuantity(1234.567) → "1,234.57"
// [!code ++]
// formatQuantity(0) → "0.00"
// [!code ++]
// formatQuantity(null) → "-"
// ----------------------------------------------------------------------------------------
export const formatQuantity = (quantity: number | null): string => {
	if (quantity === null) return empty_display_text;

	return quantity.toLocaleString("ko-KR", {minimumFractionDigits: 2, maximumFractionDigits: 2});
};
