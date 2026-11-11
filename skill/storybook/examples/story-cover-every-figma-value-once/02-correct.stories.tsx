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

export const Filled: Story = {};

export const Placeholder: Story = {args: {value: ""}};

// 전역 Error와 이름 중첩 → 지역 이름만 변경
const ErrorStory: Story = {args: {error: true, helperText: "상품명을 입력하세요"}};
export {ErrorStory as Error};

// [!code ++]
export const Disabled: Story = {args: {disabled: true}};

// 상품 등록 폼이 쓰는 조합, Value=Placeholder와 State=Error를 합친 variant
// [!code ++]
export const PlaceholderError: Story = {args: {value: "", error: true, helperText: "상품명을 입력하세요"}};
