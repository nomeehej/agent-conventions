// src/util/number/format-quantity.test.ts
import { expect, test } from "vitest";

import { formatQuantity } from "@/util/number/format-quantity";

test("0도 수량으로 처리한다", () => {
	const format = () => formatQuantity(0);

	// [!code error]
	expect(format).not.toThrow();
});
