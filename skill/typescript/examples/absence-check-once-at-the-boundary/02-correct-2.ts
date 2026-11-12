// page/product-detail/_function/format-signed-percent.ts

// ----------------------------------------------------------------------------------------
// 변화율 표시 문자열
//
// 양수에만 + 부호를 붙인다.
//
// formatSignedPercent(12.5) → "+12.5%"
// formatSignedPercent(0) → "0%"
// formatSignedPercent(-3) → "-3%"
// ----------------------------------------------------------------------------------------
export const formatSignedPercent = (value: number) => `${value > 0 ? "+" : ""}${value}%`;
