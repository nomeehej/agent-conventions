useEffect(() => {
	return subscribeToProductChanges(props.products.map((product) => product.id));
}, [props.products]);
