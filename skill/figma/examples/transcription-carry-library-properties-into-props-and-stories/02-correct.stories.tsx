// src/component/ui/select/select.stories.tsx
import type {Meta, StoryObj} from "@storybook/react-vite";
import {fn} from "storybook/test";

import {Select} from "@/component/ui/select/select";

const selectOptions = [
	{value: "option-1", label: "옵션 1"},
	{value: "option-2", label: "옵션 2"},
];

// ----------------------------------------------------------------------------------------
// select master의 Size × Value × State, DS 1.1.0
//
// Hover, Focus: CSS 의사 클래스라 story 없음
// Disabled: 코드에 없던 제안, 이번에 disabled 프롭으로 구현
// ----------------------------------------------------------------------------------------
const meta = {
	// [!code ++]
	title: "component/ui/select",
	component: Select,
	args: {size: "medium", value: "", options: selectOptions, onChange: fn()},
} satisfies Meta<typeof Select>;

export default meta;

type Story = StoryObj<typeof meta>;

// [!code ++]
export const Placeholder: Story = {
	parameters: {design: {type: "figma", url: "https://www.figma.com/design/Lb12Cd34Ef56Gh78Ij90Kl/ds?node-id=40-12"}},
};

// [!code ++]
export const Filled: Story = {
	args: {value: "option-1"},
	parameters: {design: {type: "figma", url: "https://www.figma.com/design/Lb12Cd34Ef56Gh78Ij90Kl/ds?node-id=40-13"}},
};

export const Small: Story = {
	args: {size: "small"},
	parameters: {design: {type: "figma", url: "https://www.figma.com/design/Lb12Cd34Ef56Gh78Ij90Kl/ds?node-id=40-4"}},
};

export const Large: Story = {
	args: {size: "large"},
	parameters: {design: {type: "figma", url: "https://www.figma.com/design/Lb12Cd34Ef56Gh78Ij90Kl/ds?node-id=40-20"}},
};

export const Disabled: Story = {
	args: {disabled: true},
	parameters: {design: {type: "figma", url: "https://www.figma.com/design/Lb12Cd34Ef56Gh78Ij90Kl/ds?node-id=40-15"}},
};
