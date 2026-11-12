// route/app-routes.tsx
import {RootFrame} from "@/page/root-frame";
import {MainFrame} from "@/page/(main)/main-frame";
import {OrdersPage} from "@/page/(main)/orders/orders-page";
import {ProductDetailPage} from "@/page/(main)/product-detail/product-detail-page";
import {ProductsPage} from "@/page/(main)/products/products-page";

export const AppRoutes = () => (
		<Routes>
			<Route path="/" element={<RootFrame />}>
				<Route element={<MainFrame />}>
					<Route path="products" element={<ProductsPage />} />
					<Route path="products/:productId" element={<ProductDetailPage />} />
					<Route path="orders" element={<OrdersPage />} />
				</Route>
			</Route>
		</Routes>
	);
