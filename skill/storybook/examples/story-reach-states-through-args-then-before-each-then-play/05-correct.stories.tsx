// src/component/ui/date-picker/date-picker.stories.tsx
import type {Meta, StoryObj} from "@storybook/react-vite";
import {expect, fn, mocked, screen, waitFor} from "storybook/test";

import {DatePicker} from "@/component/ui/date-picker/date-picker";
import {getToday} from "@/util/date/get-today";

// ----------------------------------------------------------------------------------------
// 날짜 선택기 story
//
//   getToday
//      preview에 spy로 등록한 모듈이므로 beforeEach에서 달력의 오늘 표시를 고정한다.
//
//   Open
//      open 프롭이 없으므로 play에서 달력 버튼을 클릭한다.
//
//   screen
//      달력은 body 포털이므로 canvas 밖에서 조회한다.
// ----------------------------------------------------------------------------------------
const meta = {
	title: "component/ui/date-picker",
	component: DatePicker,
	args: {label: "주문일", value: "2026-05-30", onChange: fn()},
	// [!code ++]
	beforeEach: () => {
		mocked(getToday).mockReturnValue("2026-05-30");
	},
} satisfies Meta<typeof DatePicker>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Filled: Story = {};

export const Open: Story = {
	// [!code ++]
	play: async (context) => {
		await context.userEvent.click(context.canvas.getByRole("button", {name: "달력 열기"}));

		// MUI 전환 효과가 끝나야 보이므로 waitFor 안에서 확인한다.
		await waitFor(() => expect(screen.getByRole("dialog")).toBeVisible());
	},
};
