// src/component/ui/button/button.stories.tsx
import type { Meta, StoryObj } from "@storybook/react-vite";

import { Button } from "@/component/ui/button/button";

const meta = {
	title: "component/ui/button",
	component: Button,
	args: { children: "저장" },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Secondary: Story = {
	args: { variant: "secondary" },
	parameters: {
		// [!code error]
		a11y: { test: "off" },
	},
};
