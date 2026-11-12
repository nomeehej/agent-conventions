import {sortBy} from "es-toolkit";

const sortProducts = (products: readonly Product[]): Product[] => sortBy(products, ["price"]);
