export const toStatusTone = (status: ProductStatus): string => {
	// [!code ++]
	if (status === "draft") return "muted";
	// [!code ++]
	if (status === "hidden") return "danger";

	return "default";
};
