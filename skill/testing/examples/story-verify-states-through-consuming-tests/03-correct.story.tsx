// test/orders/order-dialog.story.tsx
import { Fragment, useState } from "react";

import { OrderDialog } from "@/component/widget/order-dialog/order-dialog";

// ----------------------------------------------------------------------------------------
// 저장 callback의 결과를 브라우저 DOM에 남기는 story
// ----------------------------------------------------------------------------------------
export const SaveResult = () => {
	const [savedOrderId, setSavedOrderId] = useState("");

	// ----------------------------------------------------------------------------------------
	// 화면 구성
	//
	// OrderDialog: 브라우저 안에서 생성한 callback
	// output: 테스트에서 읽을 저장 결과
	// ----------------------------------------------------------------------------------------
	return (
		<Fragment>
			<OrderDialog orderId="order-1" onSave={setSavedOrderId} />
			{/* [!code ++] */}
			<output>{savedOrderId}</output>
		</Fragment>
	);
};
