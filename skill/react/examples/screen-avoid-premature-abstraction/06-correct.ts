export const toProductSaveRequest = (formValues: ProductFormValues) => {
	return {
		categoryId: formValues.categoryId,
		// 사용자가 넣은 앞뒤 공백은 서버로 보내기 전에 정리
		description: formValues.description.trim(),
		name: formValues.name.trim(),
	};
};
