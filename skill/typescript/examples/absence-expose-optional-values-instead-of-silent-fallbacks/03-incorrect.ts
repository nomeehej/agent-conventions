// 변화율이 없는 상품에 "0%"가 보인다.
// [!code error]
const changeRateText = formatSignedPercent(summary.changeRate ?? 0);
