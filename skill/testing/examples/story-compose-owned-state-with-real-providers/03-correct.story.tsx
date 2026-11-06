// test/orders/orders.story.tsx
import { StoryRoute } from "@test/_gallery/story-route";

import { AppProviders } from "@/app-providers";
import { OrdersPage } from "@/page/(main)/orders/orders-page";

/**
 * URL 정렬 상태를 재현하는 입력
 */
export interface WithSearchProps {
	/**
	 * 화면이 처음 읽을 search 문자열
	 */
	search: string;
}

/**
 * 같은 화면의 URL 입력만 바꾼 story
 */
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
