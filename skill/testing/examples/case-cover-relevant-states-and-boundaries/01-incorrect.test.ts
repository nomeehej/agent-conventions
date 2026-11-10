// src/util/number/format-quantity.test.ts
import { expect, test } from "vitest";

import { formatQuantity } from "@/util/number/format-quantity";

test("양수 수량을 표시한다", () => {
	const label = formatQuantity(1234);

	expect(label).toBe("1,234.00");
});
