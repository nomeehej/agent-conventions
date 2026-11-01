// test/orders/orders.story.tsx
import { StoryRoute } from "@test/_gallery/story-route";

import { AppProviders } from "@/app-providers";
import { PgOrders } from "@/page/(main)/orders/pg-orders";

/**
 * 주문 첫 페이지. gallery가 provider를 제공하는 프로젝트에서는 AppProviders 중복 제외
 */
export const Default = () => {
	return (
		<AppProviders>
			<StoryRoute entry="/orders" path="/orders">
				{/* [!code ++] */}
				<PgOrders />
			</StoryRoute>
		</AppProviders>
	);
};
