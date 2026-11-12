// component/widget/product-browse-toolbar/product-browse-toolbar.tsx
import {ProductToolbar} from "@/component/widget/product-toolbar/product-toolbar";

// 변형이 조합 고정. isCompact, isEditing, showSearch 프롭 없음
export const ProductBrowseToolbar = () => (
		<ProductToolbar>
			<ProductSearchField />
			<ProductBrowseActions />
		</ProductToolbar>
	);
