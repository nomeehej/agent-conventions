// [!code ++]
import {Fragment} from "react";

export const ProductListRows = (props: ProductListRowsProps) => {
	return props.products.map((product) => (
// [!code ++]
		<Fragment key={product.id}>
			<ProductListRow product={product} />
			<ProductListRowDivider />
{/* [!code ++] */}
		</Fragment>
	));
};
