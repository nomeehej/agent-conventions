// test/_fixture/test.ts
import { test as base, expect } from "@playwright/test";
import { createMockRoute } from "@test/_fixture/create-mock-route";

import type { RequestHandler } from "msw";

import { mockHandlers } from "@/service/msw/handlers";

// ----------------------------------------------------------------------------------------
// 사례별 응답 덮어쓰기
//
// 등록한 handler는 공유 handler보다 먼저 해석된다.
// ----------------------------------------------------------------------------------------
interface Fixtures {
	mockApi: {
		use: (...handlers: RequestHandler[]) => void;
	};
}

export { expect };

// ----------------------------------------------------------------------------------------
// 테스트마다 공유 handler 목록 복사와 route 수명 소유
//
// 새 context 사용을 기본값으로 유지한다.
//
//   mockApi.use
//      mount 전에 호출한다. gallery 진입 뒤 등록한 handler는 첫 조회에 반영되지 않는다.
// ----------------------------------------------------------------------------------------
export const test = base.extend<Fixtures>({
	mockApi: [async ({ page }, use) => {
		const handlers: RequestHandler[] = [...mockHandlers];
		const route = createMockRoute(handlers);
		await page.route("**/api/**", route);
		try {
			await use({
				use: (...overrides) => {
					// [!code ++]
					handlers.unshift(...overrides);
				},
			});
		} finally {
			await page.unroute("**/api/**", route);
		}
	}, { auto: true }],
});
