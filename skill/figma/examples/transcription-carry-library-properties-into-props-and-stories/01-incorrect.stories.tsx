// src/component/ui/select/select.stories.tsx
import type {Meta, StoryObj} from "@storybook/react-vite";
import {fn} from "storybook/test";

import {Select} from "@/component/ui/select/select";

const meta = {
	title: "ui/Select",
	component: Select,
	args: {size: "medium", value: "", options: [], onChange: fn()},
} satisfies Meta<typeof Select>;

export default meta;

type Story = StoryObj<typeof meta>;

// [!code error]
export const Empty: Story = {};

// [!code error]
export const Selected: Story = {args: {value: "option-1"}};
