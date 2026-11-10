// component/widget/product-toolbar/_product-toolbar-root.tsx
// ----------------------------------------------------------------------------------------
// 툴바 바깥 틀 부품
//
// children: 툴바 줄에 늘어놓을 검색과 동작 부품
// ----------------------------------------------------------------------------------------
export interface ProductToolbarRootProps {
	children: ReactNode;
}

export const ProductToolbarRoot = (props: ProductToolbarRootProps) => {
	return <header className={clsx("productToolbar__root")}>{props.children}</header>;
};
