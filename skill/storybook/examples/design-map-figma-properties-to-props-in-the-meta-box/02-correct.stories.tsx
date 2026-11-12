// src/component/ui/button/button.stories.tsx
import type {Meta, StoryObj} from "@storybook/react-vite";
import {fn} from "storybook/test";

import {Button} from "@/component/ui/button/button";

// ----------------------------------------------------------------------------------------
// 버튼 story
//
// Figma 속성과 이름이 다른 프롭의 대응을 적는다.
//
// [!code ++]
//   Variant=Fill
// [!code ++]
//      variant="primary"로 대응한다.
//
// [!code ++]
//   Variant=Outline
// [!code ++]
//      variant="secondary"로 대응한다.
//
//   State=Disabled
//      disabled로 대응한다.
// ----------------------------------------------------------------------------------------
const meta = {
	title: "component/ui/button",
	component: Button,
	args: {children: "저장", variant: "primary", onClick: fn()},
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Fill: Story = {};

// [!code ++]
export const Outline: Story = {args: {variant: "secondary"}};

export const Disabled: Story = {args: {disabled: true}};
