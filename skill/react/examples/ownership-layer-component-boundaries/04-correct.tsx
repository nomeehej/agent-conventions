// component/widget/product-status-badge/product-status-badge.tsx
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
