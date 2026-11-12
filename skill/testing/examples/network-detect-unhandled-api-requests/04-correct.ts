// test/_fixture/e2e-test.ts
import { test as base, expect } from "@playwright/test";

import type { ConsoleMessage } from "@playwright/test";

import { mock_unhandled_api_prefix } from "@/service/msw/_constant/mock";

interface Fixtures {
	mockApiFailures: undefined;
}

export { expect };

// ----------------------------------------------------------------------------------------
// mock 앱 E2E spec이 가져오는 test
//
// 화면의 오류 처리와 별개로 API 누락을 검출한다.
// ----------------------------------------------------------------------------------------
export const test = base.extend<Fixtures>({
	mockApiFailures: [async ({ page }, use) => {
		const unhandled: string[] = [];

		// Node 쪽 기록은 브라우저 문서가 교체돼도 보존된다.
		const collectMockError = (message: ConsoleMessage) => {
			if (message.type() === "error" && message.text().startsWith(mock_unhandled_api_prefix)) {
				unhandled.push(message.text());
			}
		};
		page.on("console", collectMockError);
		try {
			await use(undefined);
			// [!code ++]
			expect(unhandled, "미처리 mock API 요청").toStrictEqual([]);
		} finally {
			page.off("console", collectMockError);
		}
	}, { auto: true }],
});
