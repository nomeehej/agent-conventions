// utils.ts
export const normalizeName = (name: string) => {
	return name.trim();
};

export const buildProductPayload = (values: ProductFormValues) => {
	return {name: normalizeName(values.name)};
};

export const buildProductSaveRequest = (values: ProductFormValues) => {
	return {body: buildProductPayload(values)};
};
