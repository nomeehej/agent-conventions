// component/widget/product-table/_product-status-badge.tsx
/**
 * 상품 상태 배지 계약
 */
export interface ProductStatusBadgeProps {
	/**
	 * 배지 색을 정하는 상품 상태
	 */
	status: ProductStatus;
	children: ReactNode;
}

export const ProductStatusBadge = (props: ProductStatusBadgeProps) => {
	return (
		<span
			className={clsx(
				"productTable__statusBadge",
				props.status === "hidden" && "productTable__statusBadge--hidden",
			)}
		>
			{props.children}
		</span>
	);
};
