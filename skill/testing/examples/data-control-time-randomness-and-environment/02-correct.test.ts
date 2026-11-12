// src/util/date/normalize-date-range.test.ts
import dayjs from "dayjs";
import { afterEach, expect, test, vi } from "vitest";

import { normalizeDateRange } from "@/util/date/normalize-date-range";

// Node 시간대는 러너 시작 전에 TZ=Asia/Seoul로 지정한다.
afterEach(() => {
	vi.useRealTimers();
});

test("빈 기간의 종료일은 오늘이다", () => {
	// [!code ++]
	vi.useFakeTimers({ toFake: ["Date"] });
	vi.setSystemTime(dayjs("2026-03-01T12:00:00+09:00").toDate());

	const range = normalizeDateRange({ startDate: "", endDate: "" });

	expect(range.endDate).toBe("2026-03-01");
});
