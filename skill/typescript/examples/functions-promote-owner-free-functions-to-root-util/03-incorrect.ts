// [!code error]
// page/orders/_function/format-display-date.ts
// [!code error]
// 날짜 표시는 orders 화면을 지워도 필요. 지금은 이 화면만 사용

// ----------------------------------------------------------------------------------------
// 표시 형식 고정, 사용자 로케일을 따르면 목록 정렬 기준과 불일치
// ----------------------------------------------------------------------------------------
export const formatDisplayDate = (value: string): string => {
	return dayjs(value).format(date_format);
};
