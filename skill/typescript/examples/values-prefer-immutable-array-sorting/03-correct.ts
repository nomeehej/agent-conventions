import {orderBy} from "es-toolkit";

const sortProducts = (products: readonly Product[]): Product[] => orderBy(products, ["categoryId", "price"], ["asc", "desc"]);
