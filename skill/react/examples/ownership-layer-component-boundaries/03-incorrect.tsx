// [!code error]
// page/product-detail/product-status-badge.tsx
export interface ProductStatusBadgeProps {
	status: ProductStatus;
	children: ReactNode;
}

// 도메인 타입만 알고 화면 타입과 훅은 모르는데 이 화면에서만 써서 page에 남아 있다.
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
