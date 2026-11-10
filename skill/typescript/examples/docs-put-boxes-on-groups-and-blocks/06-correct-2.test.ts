// util/number/format-quantity.test.ts
import { expect, test } from "vitest";

import { formatQuantity } from "@/util/number/format-quantity";

// [!code ++]
test.each([
	{ name: "천 단위", value: 1234, expected: "1,234.00" },
	{ name: "반올림", value: 1234.567, expected: "1,234.57" },
	{ name: "0", value: 0, expected: "0.00" },
	{ name: "빈 값", value: null, expected: "-" },
])("$name 수량은 $expected로 표시한다", (input) => {
	const label = formatQuantity(input.value);

	expect(label).toBe(input.expected);
});
