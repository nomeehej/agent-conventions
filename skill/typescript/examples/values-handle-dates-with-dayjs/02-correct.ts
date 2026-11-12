import dayjs from "dayjs";

// 만료 표시는 YYYY.MM 형식이다.
const date_expiry_month_format = "YYYY.MM";

const expiresAt = dayjs(issuedAt).add(token_expiry_hours, "hour");
const expiresLabel = expiresAt.format(date_expiry_month_format);
