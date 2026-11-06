// page/products/products-page.tsx
// useProductFilterForm은 두 useState를 돌려주기만 하고 이 화면 하나만 호출
import {useProductFilterForm} from "@/page/products/_hook/use-product-filter-form";

export const ProductsPage = () => {
	const productFilterForm = useProductFilterForm();

	return <ProductFilterSection keyword={productFilterForm.keyword} />;
};
