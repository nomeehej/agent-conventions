import {sortBy} from "es-toolkit";

const sortProducts = (products: readonly Product[]): Product[] => {
	return sortBy(products, ["price"]);
};
