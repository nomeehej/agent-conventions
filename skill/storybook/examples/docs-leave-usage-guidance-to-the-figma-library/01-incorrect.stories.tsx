// src/component/ui/button/button.stories.tsx
import type {Meta} from "@storybook/react-vite";
import {fn} from "storybook/test";

import {Button} from "@/component/ui/button/button";

// [!code error]
/**
 * 화면마다 저장 같은 주요 동작 하나에만 primary를 씁니다.
 * 취소, 닫기 같은 보조 동작은 secondary로 둡니다.
 */
const meta = {
	title: "component/ui/button",
	component: Button,
	// [!code error]
	tags: ["autodocs"],
	args: {children: "저장", variant: "primary", onClick: fn()},
} satisfies Meta<typeof Button>;

export default meta;
