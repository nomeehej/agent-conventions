// src/component/ui/button/button.stories.tsx
import type {Meta} from "@storybook/react-vite";
import {fn} from "storybook/test";

import {Button} from "@/component/ui/button/button";

// ----------------------------------------------------------------------------------------
// [!code ++]
// 버튼 story
//
// [!code ++]
// 사용 지침은 Figma 라이브러리의 button master 설명에 둔다.
//
//   Variant=Fill
//      variant="primary"로 대응한다.
//
//   Variant=Outline
//      variant="secondary"로 대응한다.
// ----------------------------------------------------------------------------------------
const meta = {
	title: "component/ui/button",
	component: Button,
	args: {children: "저장", variant: "primary", onClick: fn()},
} satisfies Meta<typeof Button>;

export default meta;
