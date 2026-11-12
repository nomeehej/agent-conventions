// [!code error]
// page/orders/_function/format-display-date.ts
// [!code error]
// 날짜 표시는 orders 화면을 지워도 필요하지만 지금은 이 화면만 쓴다.

// ----------------------------------------------------------------------------------------
// 날짜 표시 형식
//
// 형식을 고정한다. 사용자 로케일을 따르면 목록 정렬 기준과 어긋나기 때문이다.
// ----------------------------------------------------------------------------------------
export const formatDisplayDate = (value: string): string => {
	return dayjs(value).format(date_format);
};
