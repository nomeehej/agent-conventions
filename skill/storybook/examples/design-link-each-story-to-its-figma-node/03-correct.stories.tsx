// src/component/ui/search-input/search-input.stories.tsx
import type {Meta, StoryObj} from "@storybook/react-vite";
import {fn} from "storybook/test";

import {SearchInput} from "@/component/ui/search-input/search-input";

// ----------------------------------------------------------------------------------------
// 검색 입력 story, Figma master가 없는 코드에만 있음 부품
//
// [!code ++]
// 예외: design 링크 없음, 근거는 Figma 라이브러리 목차의 코드에만 있음 카드
// ----------------------------------------------------------------------------------------
const meta = {
	title: "component/ui/search-input",
	component: SearchInput,
	args: {label: "검색어", value: "키보드", onChange: fn()},
} satisfies Meta<typeof SearchInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Filled: Story = {};
