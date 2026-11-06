// route/app-routes.tsx
import {RootOutlet} from "@/page/root-outlet";
import {MainOutlet} from "@/page/(main)/main-outlet";
import {OrdersPage} from "@/page/(main)/orders/orders-page";
import {ProductsPage} from "@/page/(main)/products/products-page";
import {ProductDetailPage} from "@/page/product-detail/product-detail-page";

export const AppRoutes = () => {
	return (
		<Routes>
			<Route path="/" element={<RootOutlet />}>
				<Route element={<MainOutlet />}>
					<Route path="products" element={<ProductsPage />} />
					<Route path="orders" element={<OrdersPage />} />
				</Route>
				<Route path="products/:productId" element={<ProductDetailPage />} />
			</Route>
		</Routes>
	);
};
