// util/number/format-quantity.ts

// ----------------------------------------------------------------------------------------
// [!code error]
// 수량 표시 문자열, 천 단위 쉼표와 소수 둘째 자리 고정
// ----------------------------------------------------------------------------------------
export const formatQuantity = (quantity: number | null): string => {
	if (quantity === null) {
		return empty_display_text;
	}

	return quantity.toLocaleString("ko-KR", {minimumFractionDigits: 2, maximumFractionDigits: 2});
};
