// util/money/format-signed-amount.ts

// ----------------------------------------------------------------------------------------
// 화면 공통 금액 표시, 소수 두 자리와 부호 고정
//
// formatSignedAmount({value: 12.5, currency: "USD"}) → "+$12.50"
// formatSignedAmount({value: -3, currency: "USD"}) → "-$3.00"
// formatSignedAmount({value: 0, currency: "USD"}) → "+$0.00"
// formatSignedAmount({value: 1234.567, currency: "USD"}) → "+$1234.57"
// ----------------------------------------------------------------------------------------
export const formatSignedAmount = (amount: Amount): string => {
	return `${amount.value < 0 ? "-" : "+"}$${Math.abs(amount.value).toFixed(2)}`;
};
