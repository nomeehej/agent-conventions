// [!code error]
// 서버 계약은 {category_id, product_name}인데 우리 표기로 바꿔 보낸다.
const buildProductSaveBody = (values: ProductFormValues) => {
	return {
// [!code error]
		categoryId: values.categoryId,
// [!code error]
		productName: values.name.trim(),
	};
};
