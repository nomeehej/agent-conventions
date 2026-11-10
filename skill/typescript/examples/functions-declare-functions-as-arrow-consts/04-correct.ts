export const cellFormatterByValueType = {
	text: (value: string): string => {
		return value.trim();
	},
} as const;

export const toProductIds = (products: Product[]): string[] => {
	return products.map((product) => product.id);
};
