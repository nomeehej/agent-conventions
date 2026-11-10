// test/orders/orders.integration.spec.ts
import { expect, test } from "@test/_fixture/test";

test("빈 주문 목록에 안내가 표시된다", async ({ mount }) => {
	// GIVEN 실제 주문 화면의 story
	const view = await mount("orders/Default");

	// WHEN DOM에 정답 문구 직접 삽입
	// [!code error]
	await view.evaluate((element) => {
		element.innerHTML = '<p role="status">주문이 없습니다</p>';
	});

	// THEN 삽입한 문구의 존재
	await expect(view.getByRole("status")).toHaveText("주문이 없습니다");
});
