const responseProductListSuspense = useProductListSuspense();

<Table
	rows={responseProductListSuspense.data.items.map((product) => ({
		id: product.id,
		name: product.name,
	}))}
/>;
