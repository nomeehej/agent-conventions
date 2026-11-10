// src/util/number/format-quantity.test.ts
import { expect, test } from "vitest";

import { formatQuantity } from "@/util/number/format-quantity";

// [!code error]
test("수량이 없으면 빈 값을, 있으면 천 단위 구분을 표시한다", () => {
	const emptyLabel = formatQuantity(null);
	const quantityLabel = formatQuantity(1234);

	expect(emptyLabel).toBe("-");
	expect(quantityLabel).toBe("1,234.00");
});
