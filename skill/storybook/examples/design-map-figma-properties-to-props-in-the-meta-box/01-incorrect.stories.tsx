// src/component/ui/button/button.stories.tsx
import type {Meta, StoryObj} from "@storybook/react-vite";
import {fn} from "storybook/test";

import {Button} from "@/component/ui/button/button";

const meta = {
	title: "component/ui/button",
	component: Button,
	args: {children: "저장", variant: "primary", onClick: fn()},
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Fill: Story = {};

// [!code error]
export const Outline: Story = {args: {variant: "outline"}};

export const Disabled: Story = {args: {disabled: true}};
