// src/component/ui/text-field/text-field.stories.tsx
import type {Meta, StoryObj} from "@storybook/react-vite";

import {TextField} from "@/component/ui/text-field/text-field";

// [!code error]
const meta: Meta<typeof TextField> = {
	title: "component/ui/text-field",
	component: TextField,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Filled: Story = {
	// [!code error]
	args: {label: "상품명", value: "무선 키보드", onChange: () => {}},
};

export const Placeholder: Story = {
	args: {label: "상품명", value: "", placeholder: "상품명을 입력하세요", onChange: () => {}},
};
