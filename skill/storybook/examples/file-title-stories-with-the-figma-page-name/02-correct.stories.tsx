// src/component/ui/text-field/text-field.stories.tsx
import type {Meta} from "@storybook/react-vite";
import {fn} from "storybook/test";

import {TextField} from "@/component/ui/text-field/text-field";

const meta = {
	// [!code ++]
	title: "component/ui/text-field",
	component: TextField,
	args: {label: "상품명", value: "무선 키보드", onChange: fn()},
} satisfies Meta<typeof TextField>;

export default meta;
