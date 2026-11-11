// page/products/products-page.tsx
export const ProductsPage = () => {
// [!code ++]
	const [keyword, setKeyword] = useState("");
// [!code ++]
	const [categoryId, setCategoryId] = useState<string>();

	return (
		<ProductFilterBar
			keyword={keyword}
			categoryId={categoryId}
			onKeywordChange={setKeyword}
			onCategoryIdChange={setCategoryId}
		/>
	);
};
