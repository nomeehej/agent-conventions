// src/component/ui/date-picker/date-picker.stories.tsx
import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn, screen } from "storybook/test";

import { DatePicker } from "@/component/ui/date-picker/date-picker";

const meta = {
	title: "component/ui/date-picker",
	component: DatePicker,
	args: { label: "시작일", value: "", onChange: fn() },
} satisfies Meta<typeof DatePicker>;

export default meta;

type Story = StoryObj<typeof meta>;

export const PickDay: Story = {
	args: { value: "2026-05-01" },
	// [!code error]
	play: async ({ canvas, userEvent }) => {
		await userEvent.click(canvas.getByRole("button", { name: "달력 열기" }));
		await userEvent.click(await screen.findByRole("gridcell", { name: "30" }));
	},
};
