// test/orders/orders.story.tsx
import { StoryRoute } from "@test/_gallery/story-route";

import { AppProviders } from "@/app-providers";
import { OrdersPage } from "@/page/(main)/orders/orders-page";

// ----------------------------------------------------------------------------------------
// URL 정렬 상태를 재현하는 입력
//
//   search
//      `?`로 시작하는 초기 query 문자열이다.
// ----------------------------------------------------------------------------------------
export interface WithSearchProps {
	search: string;
}

export const WithSearch = (props: WithSearchProps) => {
	return (
		<AppProviders>
			{/* [!code ++] */}
			<StoryRoute entry={`/orders${props.search}`} path="/orders">
				<OrdersPage />
			</StoryRoute>
		</AppProviders>
	);
};
