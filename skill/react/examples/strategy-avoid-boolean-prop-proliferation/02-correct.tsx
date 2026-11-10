// component/widget/product-browse-toolbar/product-browse-toolbar.tsx
import {ProductToolbar} from "@/component/widget/product-toolbar/product-toolbar";

// 변형이 조합을 고정하므로 isCompact, isEditing, showSearch 프롭이 없음
export const ProductBrowseToolbar = () => {
	return (
		<ProductToolbar.Root>
			<ProductSearchField />
			<ProductBrowseActions />
		</ProductToolbar.Root>
	);
};
