// component/widget/product-edit-toolbar/product-edit-toolbar.tsx
import {ProductToolbar} from "@/component/widget/product-toolbar/product-toolbar";

export const ProductEditToolbar = () => {
	return (
		<ProductToolbar.Root>
			<ProductEditActions />
		</ProductToolbar.Root>
	);
};
