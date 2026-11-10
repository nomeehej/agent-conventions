interface ProductSummary {
	id: string;
	name: string;
}

type ProductMode = "list" | "grid";

type EditableCategoryNode = Omit<ProductCategoryNode, "children"> & {
	children: EditableCategoryNode[];
};
