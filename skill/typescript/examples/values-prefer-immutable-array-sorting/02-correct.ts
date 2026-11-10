import {sortBy} from "es-toolkit";

const toSortedProducts = (products: readonly Product[]): Product[] => {
	return sortBy(products, ["price"]);
};
