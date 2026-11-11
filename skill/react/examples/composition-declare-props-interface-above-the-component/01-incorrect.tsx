// component/widget/product-status-badge/product-status-badge.tsx
// [!code error]
interface ProductStatusBadgeProps {
	status: ProductStatus;
}

const product_status_badge_label = {draft: "초안", active: "판매 중", hidden: "숨김"} as const;

export const ProductStatusBadge = (props: ProductStatusBadgeProps) => {
	return <span className={clsx("productStatusBadge__root")}>{product_status_badge_label[props.status]}</span>;
};
