// 서버가 표시 타임존으로 보낸 고정 형식이라 시각 변환 없이 분까지만 표시한다.
const response_date_time_minute_length = "YYYY-MM-DDTHH:mm".length;
const compactDateTime = responseDateTime.slice(0, response_date_time_minute_length).replace("T", " ");
