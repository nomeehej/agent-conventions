// src/util/number/format-quantity.test.ts
import { expect, test } from "vitest";

import { formatQuantity } from "@/util/number/format-quantity";

// [!code error]
test("잘된다", () => {
	const label = formatQuantity(null);

	expect(label).toBe("-");
});
