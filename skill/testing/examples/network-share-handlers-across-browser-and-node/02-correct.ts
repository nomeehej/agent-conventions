// src/service/msw/worker.ts
import { setupWorker } from "msw/browser";

import { mock_unhandled_api_prefix } from "@/service/msw/_constant/mock";
import { mockHandlers } from "@/service/msw/handlers";

// ----------------------------------------------------------------------------------------
// MSW worker 시작
//
// mock 모드 진입에서만 호출한다.
// ----------------------------------------------------------------------------------------
export const startMockWorker = async () => {
	// [!code ++]
	return setupWorker(...mockHandlers).start({
		onUnhandledRequest: (request, print) => {
			if (new URL(request.url).pathname.startsWith("/api/")) {
				console.error(mock_unhandled_api_prefix, request.method, request.url);
				print.error();
			}
		},
	});
};
