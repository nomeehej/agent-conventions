// src/page/orders/_function/to-order-rows.test.ts
import { expect, test } from "vitest";

import { toOrderRows } from "@/page/orders/_function/to-order-rows";

test("수량을 표시용 행으로 변환한다", () => {
	const rows = toOrderRows([{ id: "order-1", quantity: 2, status: "open" }]);

	// [!code ++]
	expect(rows).toStrictEqual([{ id: "order-1", quantityLabel: "2.00" }]);
});
