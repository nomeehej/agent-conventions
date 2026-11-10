// src/util/date/format-display-date.test.ts
import { expect, test, vi } from "vitest";

import { formatDisplayDate } from "@/util/date/format-display-date";

test("잘못된 날짜 문자열은 경고를 남기고 빈 문자열을 표시한다", () => {
	// [!code error]
	const warn = vi.spyOn(console, "warn").mockImplementation(() => undefined);

	const label = formatDisplayDate("not-a-date");

	expect(label).toBe("");
	expect(warn).toHaveBeenCalledTimes(1);
});
