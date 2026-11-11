// src/component/ui/date-picker/date-picker.stories.tsx
import type { Meta, StoryObj } from "@storybook/react-vite";
import { expect, fn, screen, waitFor } from "storybook/test";

import { DatePicker } from "@/component/ui/date-picker/date-picker";

const meta = {
	title: "component/ui/date-picker",
	component: DatePicker,
	args: { label: "시작일", value: "", onChange: fn() },
} satisfies Meta<typeof DatePicker>;

export default meta;

type Story = StoryObj<typeof meta>;

// [!code ++]
export const Open: Story = {
	play: async (context) => {
		await context.userEvent.click(context.canvas.getByRole("button", { name: "달력 열기" }));

		await waitFor(() => expect(screen.getByRole("grid")).toBeVisible());
	},
};
