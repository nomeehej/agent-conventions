import {orderBy} from "es-toolkit";

const sortProducts = (products: readonly Product[]): Product[] => {
	return orderBy(products, ["categoryId", "price"], ["asc", "desc"]);
};
