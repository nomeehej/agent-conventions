export const cellFormatterByValueType = {
	text: (value: string): string => value.trim(),
} as const;

export const toProductIds = (products: Product[]): string[] => products.map((product) => product.id);
