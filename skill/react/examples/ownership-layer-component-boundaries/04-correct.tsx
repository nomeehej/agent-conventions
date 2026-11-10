// component/widget/product-status-badge/product-status-badge.tsx
// ----------------------------------------------------------------------------------------
// 상품 상태 배지 계약
//
// status: 배지 색을 정하는 상품 상태
// ----------------------------------------------------------------------------------------
export interface ProductStatusBadgeProps {
	status: ProductStatus;
	children: ReactNode;
}

export const ProductStatusBadge = (props: ProductStatusBadgeProps) => {
	return (
		<span
			className={clsx(
				"productStatusBadge__root",
				props.status === "hidden" && "productStatusBadge__root--hidden",
			)}
		>
			{props.children}
		</span>
	);
};
