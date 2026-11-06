// page/product-detail/product-detail-page.tsx
import {SectionHeading} from "@/page/product-detail/_section-heading";
import {ProductTableSection} from "@/page/product-detail/product-table-section/product-table-section";
import {ProductSummary} from "@/page/product-detail/product-summary/product-summary";

export const ProductDetailPage = () => {
	return (
		<main className={clsx("productDetailPage__root")}>
			<ProductTableSection heading={<SectionHeading title="최근 주문" />} />
			<ProductSummary heading={<SectionHeading title="요약" />} />
		</main>
	);
};
