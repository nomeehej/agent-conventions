// src/component/ui/text-field/text-field.stories.tsx
import type {Meta, StoryObj} from "@storybook/react-vite";
import {fn} from "storybook/test";

import {TextField} from "@/component/ui/text-field/text-field";

const meta = {
	title: "component/ui/text-field",
	component: TextField,
	// [!code ++]
	args: {label: "상품명", value: "무선 키보드", placeholder: "상품명을 입력하세요", onChange: fn()},
	// [!code ++]
} satisfies Meta<typeof TextField>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Filled: Story = {};

export const Placeholder: Story = {args: {value: ""}};
