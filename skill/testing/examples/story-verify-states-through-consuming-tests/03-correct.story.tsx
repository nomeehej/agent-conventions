// test/orders/order-edit-section.story.tsx
import { useState } from "react";

import { AppProviders } from "@/app-providers";
import { OrderEditSection } from "@/page/(main)/orders/order-edit-section";

// ----------------------------------------------------------------------------------------
// 저장 callback의 결과를 브라우저 DOM에 남기는 story
// ----------------------------------------------------------------------------------------
export const SaveResult = () => {
	const [savedOrderId, setSavedOrderId] = useState("");

	return (
		<AppProviders>
			<OrderEditSection orderId="order-1" onSave={setSavedOrderId} />
			{/* [!code ++] */}
			<output>{savedOrderId}</output>
		</AppProviders>
	);
};
