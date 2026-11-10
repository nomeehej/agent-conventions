// src/util/number/format-quantity.test.ts
import { expect, test } from "vitest";

import { formatQuantity } from "@/util/number/format-quantity";

// [!code ++]
test("수량이 없으면 빈 값 표시를 반환한다", () => {
	const label = formatQuantity(null);

	expect(label).toBe("-");
});
