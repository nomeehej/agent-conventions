// page/products/products-page.tsx
import {Fragment} from "react";

import {Panel} from "@/component/ui/panel/panel";

export const ProductsPage = () => {
	return (
		<Fragment>
			<Panel.Root>
				<Panel.Header>
					<h2>제품</h2>
					<ProductSearchField />
				</Panel.Header>
				<ProductList />
				<Panel.Footer>
					<Pagination />
				</Panel.Footer>
			</Panel.Root>

			<Panel.Root>
				<Panel.Header>
					<h2>제품 등록</h2>
				</Panel.Header>
				<ProductCreateForm />
			</Panel.Root>
		</Fragment>
	);
};
