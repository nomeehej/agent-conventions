// src/component/ui/date-picker/date-picker.stories.tsx
import type {Meta, StoryObj} from "@storybook/react-vite";
import {expect, fn, mocked, screen, waitFor} from "storybook/test";

import {DatePicker} from "@/component/ui/date-picker/date-picker";
import {getToday} from "@/util/date/get-today";

// ----------------------------------------------------------------------------------------
// 날짜 선택기 story
//
// getToday: preview의 sb.mock 대체 모듈 → 달력의 오늘 표시 고정
// Open: open 프롭 없음 → play에서 달력 버튼 클릭
// screen: 달력은 body 포털 → canvas 밖 조회
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
		// MUI 전환 효과 → 보이는지는 waitFor 안에서 확인
		await waitFor(() => expect(screen.getByRole("dialog")).toBeVisible());
	},
};
