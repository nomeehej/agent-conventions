// src/page/orders/_function/to-order-rows.test.ts
import { expect, test } from "vitest";

import type { OrderDto } from "@/service/orders";

import { toOrderRows } from "@/page/orders/_function/to-order-rows";

test("수량을 행에 표시한다", () => {
	// [!code error]
	const order = { quantity: 2 } as OrderDto;

	const rows = toOrderRows([order]);

	expect(rows[0].quantityLabel).toBe("2.00");
});
