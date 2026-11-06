export const ProductsPage = () => {
	const responseProductListSuspense = useProductListSuspense();

// [!code error]
	if (responseProductListSuspense.isError) {
// [!code error]
		return <ErrorState />;
// [!code error]
	}

	return <Table rows={responseProductListSuspense.data.items} />;
};
