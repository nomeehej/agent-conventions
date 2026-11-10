// component/widget/product-toolbar/_product-toolbar-root.tsx
export interface ProductToolbarRootProps {
	children: ReactNode;
}

export const ProductToolbarRoot = (props: ProductToolbarRootProps) => {
	return <header className={clsx("productToolbar__root")}>{props.children}</header>;
};
