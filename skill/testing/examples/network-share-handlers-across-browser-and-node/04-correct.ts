// test/_fixture/test.ts
import { test as base, expect } from "@playwright/test";
import { toMockRoute } from "@test/_fixture/to-mock-route";

import type { RequestHandler } from "msw";

import { mockHandlers } from "@/service/msw/handlers";

/**
 * 사례별 응답 덮어쓰기
 */
interface Fixtures {
	/**
	 * 공유 handler보다 먼저 해석할 덮어쓰기 handler의 등록
	 */
	mockApi: {
		/**
		 * 요청 시작 전에 추가할 덮어쓰기 handler
		 */
		use: (...handlers: RequestHandler[]) => void;
	};
}

export { expect };

/**
 * 테스트마다 공유 handler 목록 복사와 route 수명 소유. 새 context 사용을 기본값으로 유지
 *
 *   - mockApi.use는 mount 전에 호출. gallery 진입 뒤 등록한 handler는 첫 조회에 늦음
 */
export const test = base.extend<Fixtures>({
	mockApi: [async ({ page }, use) => {
		const handlers: RequestHandler[] = [...mockHandlers];
		const route = toMockRoute(handlers);
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
