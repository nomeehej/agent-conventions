// test/_golden/order-rows.test.ts
import { expect, test } from "vitest";

import { toOrderRows } from "@/page/orders/_function/to-order-rows";

test("주문 행이 기준값과 같다", () => {
	const rows = toOrderRows([
		{ id: "order-1", quantity: 2, status: "open" },
		{ id: "order-2", quantity: 0, status: "closed" },
		{ id: "order-3", quantity: 1234, status: "open" },
	]);

	// [!code ++]
	expect(rows).toMatchInlineSnapshot(`
		[
		  {
		    "id": "order-1",
		    "quantityLabel": "2.00",
		  },
		  {
		    "id": "order-2",
		    "quantityLabel": "0.00",
		  },
		  {
		    "id": "order-3",
		    "quantityLabel": "1,234.00",
		  },
		]
	`);
});
