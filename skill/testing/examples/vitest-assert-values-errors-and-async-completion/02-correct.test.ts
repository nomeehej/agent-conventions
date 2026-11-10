// src/service/orders.test.ts
import { expect, test } from "vitest";

import { getOrder } from "@/service/orders";

test("없는 주문은 오류로 거부된다", async () => {
	const request = getOrder("missing");

	// [!code ++]
	await expect(request).rejects.toThrow("주문이 없습니다");
});
