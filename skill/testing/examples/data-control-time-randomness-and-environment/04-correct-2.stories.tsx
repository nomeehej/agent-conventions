// src/component/ui/date-picker/date-picker.stories.tsx
import type { Meta, StoryObj } from "@storybook/react-vite";
import { expect, fn, mocked } from "storybook/test";

import { DatePicker } from "@/component/ui/date-picker/date-picker";
import { getToday } from "@/util/date/get-today";

const meta = {
	title: "component/ui/date-picker",
	component: DatePicker,
	args: { label: "시작일", value: "", onChange: fn() },
} satisfies Meta<typeof DatePicker>;

export default meta;

type Story = StoryObj<typeof meta>;

export const PickToday: Story = {
	beforeEach: () => {
		// [!code ++]
		mocked(getToday).mockReturnValue("2026-03-01");
	},
	play: async ({ canvas, userEvent, args }) => {
		await userEvent.click(canvas.getByRole("button", { name: "오늘" }));

		await expect(args.onChange).toHaveBeenCalledWith("2026-03-01");
	},
};
