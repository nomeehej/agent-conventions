// [!code error]
// page/product-detail/_product-status-badge.tsx
// ----------------------------------------------------------------------------------------
// 상품 상태 배지 계약
//
// status: 배지 색을 정하는 상품 상태
// ----------------------------------------------------------------------------------------
export interface ProductStatusBadgeProps {
	status: ProductStatus;
	children: ReactNode;
}

// 도메인 타입 하나만 알고 화면 타입과 훅은 모름. 이 화면에서만 쓴다는 이유로 page에 남아 있음
// [!code error]
export const ProductStatusBadge = (props: ProductStatusBadgeProps) => {
	return (
		<span
			className={clsx(
				"productDetailPage__statusBadge",
				props.status === "hidden" && "productDetailPage__statusBadge--hidden",
			)}
		>
			{props.children}
		</span>
	);
};
