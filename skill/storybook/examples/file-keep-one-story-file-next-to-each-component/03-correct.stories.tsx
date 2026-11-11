// src/component/ui/panel/panel.stories.tsx
import type {Meta, StoryObj} from "@storybook/react-vite";
import {Fragment} from "react";

import {Panel} from "@/component/ui/panel/panel";

const meta = {
	title: "component/ui/panel",
	// [!code ++]
	component: Panel.Root,
} satisfies Meta<typeof Panel.Root>;

export default meta;

type Story = StoryObj<typeof meta>;

// Figma examples 칸 HeaderAndBody, 머리와 본문을 조립한 모습
export const HeaderAndBody: Story = {
	args: {
		// [!code ++]
		children: (
			<Fragment>
				<Panel.Header>주문 요약</Panel.Header>
				<Panel.Body>무선 키보드 외 2건</Panel.Body>
			</Fragment>
		),
	},
};
