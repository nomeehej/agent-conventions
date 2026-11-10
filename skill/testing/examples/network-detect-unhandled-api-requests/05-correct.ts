// src/service/msw/worker.ts
import { setupWorker } from "msw/browser";

import { mock_unhandled_api_prefix } from "@/service/msw/_constant/mock";
import { mockHandlers } from "@/service/msw/handlers";

// ----------------------------------------------------------------------------------------
// mock 모드 진입에서만 호출하는 MSW worker 시작, 미처리 API 요청은 표식 기록
// ----------------------------------------------------------------------------------------
export const startMockWorker = async () => {
	return setupWorker(...mockHandlers).start({
		onUnhandledRequest: (request, print) => {
			if (new URL(request.url).pathname.startsWith("/api/")) {
				// [!code ++]
				console.error(mock_unhandled_api_prefix, request.method, request.url);
				print.error();
			}
		},
	});
};
