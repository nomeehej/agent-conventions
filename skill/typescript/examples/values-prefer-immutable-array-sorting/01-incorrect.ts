const sortProducts = (products: Product[]): Product[] => {
	return products.sort((left, right) => left.price - right.price);
};
