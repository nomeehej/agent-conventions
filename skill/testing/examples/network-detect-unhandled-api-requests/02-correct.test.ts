// src/service/msw/handlers.test.ts
import { afterAll, afterEach, beforeAll, expect, test } from "vitest";
import { setupServer } from "msw/node";

import { mockHandlers } from "@/service/msw/handlers";

const server = setupServer(...mockHandlers);

beforeAll(() => {
	// [!code ++]
	server.listen({ onUnhandledRequest: "error" });
});
afterEach(() => {
	server.resetHandlers();
});
afterAll(() => {
	server.close();
});

test("공유 handler 목록이 주문 목록 응답을 돌려준다", async () => {
	const response = await fetch("https://app.example.test/api/orders");

	expect(await response.json()).toMatchObject({ total: 1, items: [{ id: "order-1" }] });
});
