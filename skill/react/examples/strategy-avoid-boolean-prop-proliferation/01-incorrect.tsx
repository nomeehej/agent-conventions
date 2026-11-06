// component/widget/product-toolbar/product-toolbar.tsx
export interface ProductToolbarProps {
	isCompact?: boolean;
	isEditing?: boolean;
	showSearch?: boolean;
}

export const ProductToolbar = (props: ProductToolbarProps) => {
	return (
		<header>
			{props.showSearch && <ProductSearchField />}
			{props.isEditing ? (
				<ProductEditActions compact={props.isCompact} />
			) : (
				<ProductBrowseActions compact={props.isCompact} />
			)}
		</header>
	);
};
