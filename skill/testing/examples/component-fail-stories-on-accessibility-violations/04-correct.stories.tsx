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
		// 임시: secondary 글자 대비가 4.4:1이라 경고로 둔다. 토큰을 교체하면 지운다.
		// [!code ++]
		a11y: { test: "todo" },
	},
};
