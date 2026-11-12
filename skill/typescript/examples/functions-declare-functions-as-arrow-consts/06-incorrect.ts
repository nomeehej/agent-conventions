export const toStatusTone = (status: ProductStatus): string => {
	// [!code error]
	if (status === "draft") {
		return "muted";
	}

	if (status === "hidden") {
		return "danger";
	}

	return "default";
};
