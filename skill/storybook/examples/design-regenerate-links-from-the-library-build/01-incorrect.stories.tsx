// src/component/ui/text-field/text-field.stories.tsx
import type {Meta, StoryObj} from "@storybook/react-vite";
import {fn} from "storybook/test";

import {TextField} from "@/component/ui/text-field/text-field";

const meta = {
	title: "component/ui/text-field",
	component: TextField,
	args: {label: "상품명", value: "무선 키보드", placeholder: "상품명을 입력하세요", onChange: fn()},
} satisfies Meta<typeof TextField>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Placeholder: Story = {
	args: {value: ""},
	parameters: {
		// DS 1.2.0 publish 뒤 손으로 고친 노드
		// [!code error]
		design: {type: "figma", url: "https://www.figma.com/design/Lb12Cd34Ef56Gh78Ij90Kl/admin-ds?node-id=12-53"},
	},
};

export const PlaceholderError: Story = {
	args: {value: "", error: true, helperText: "상품명을 입력하세요"},
	parameters: {
		// [!code error]
		design: {type: "figma", url: "https://www.figma.com/design/Lb12Cd34Ef56Gh78Ij90Kl/admin-ds?node-id=12-52"},
	},
};
