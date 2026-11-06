// component/widget/product-browse-toolbar/product-browse-toolbar.tsx
import {ProductToolbar} from "@/component/widget/product-toolbar/product-toolbar";

export const ProductBrowseToolbar = () => {
	return (
		<ProductToolbar.Root>
			<ProductSearchField />
			<ProductBrowseActions />
		</ProductToolbar.Root>
	);
};
