// page/product-detail/_function/format-signed-percent.ts
export const formatSignedPercent = (value: number | null | undefined) => {
	if (isNil(value)) {
		return copy_empty_value_text;
	}
	return `${value > 0 ? "+" : ""}${value}%`;
};
