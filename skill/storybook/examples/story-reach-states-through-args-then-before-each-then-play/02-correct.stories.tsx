// src/component/ui/date-picker/date-picker.stories.tsx
import type {Meta, StoryObj} from "@storybook/react-vite";
import {fn} from "storybook/test";

import {DatePicker} from "@/component/ui/date-picker/date-picker";

const meta = {
	title: "component/ui/date-picker",
	component: DatePicker,
	// [!code ++]
	args: {label: "주문일", value: "2026-05-30", onChange: fn()},
} satisfies Meta<typeof DatePicker>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Filled: Story = {};

export const Placeholder: Story = {args: {value: ""}};
