import dayjs from "dayjs";

const date_input_format = "YYYY-MM-DD";

/**
 * 형식은 맞지만 없는 날짜(2026-02-30 등) 제외
 */
export const parseEntryDateText = (dateText: string): string | undefined => {
	return dayjs(dateText).format(date_input_format) === dateText ? dateText : undefined;
};
