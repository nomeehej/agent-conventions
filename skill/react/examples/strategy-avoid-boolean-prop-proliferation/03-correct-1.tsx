// component/widget/product-toolbar/product-toolbar.tsx
export interface ProductToolbarProps {
	children: ReactNode;
}

export const ProductToolbar = (props: ProductToolbarProps) => <header className={clsx("productToolbar__root")}>{props.children}</header>;
