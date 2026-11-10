// [!code ++]
// util/date/format-display-date.ts

// ----------------------------------------------------------------------------------------
// 표시 형식 고정, 사용자 로케일을 따르면 목록 정렬 기준과 불일치
// ----------------------------------------------------------------------------------------
export const formatDisplayDate = (value: string): string => {
	return dayjs(value).format(date_format);
};
