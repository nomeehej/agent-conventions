import dayjs from "dayjs";

const date_input_format = "YYYY-MM-DD";

// ----------------------------------------------------------------------------------------
// 입력 날짜 문자열 파서
//
// 형식은 맞지만 없는 날짜는 받지 않는다.
//
// parseEntryDateText("2026-11-10") → "2026-11-10"
// parseEntryDateText("2026-02-30") → undefined
// parseEntryDateText("2026-2-3") → undefined
// ----------------------------------------------------------------------------------------
export const parseEntryDateText = (dateText: string): string | undefined => dayjs(dateText).format(date_input_format) === dateText ? dateText : undefined;
