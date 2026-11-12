// component/widget/product-browse-toolbar/product-browse-toolbar.tsx
import {ProductToolbar} from "@/component/widget/product-toolbar/product-toolbar";

// 변형은 조합으로 고정하므로 isCompact, isEditing, showSearch 프롭이 없다.
export const ProductBrowseToolbar = () => (
		<ProductToolbar>
			<ProductSearchField />
			<ProductBrowseActions />
		</ProductToolbar>
	);
