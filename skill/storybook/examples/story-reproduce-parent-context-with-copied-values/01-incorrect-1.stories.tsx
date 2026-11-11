// src/component/ui/text-field/text-field.stories.tsx
import type {Meta} from "@storybook/react-vite";
import {clsx} from "clsx";
import {fn} from "storybook/test";

import {TextField} from "@/component/ui/text-field/text-field";

const meta = {
	title: "component/ui/text-field",
	component: TextField,
	args: {label: "상품명", value: "무선 키보드", onChange: fn()},
	decorators: [
		(Story) => (
			// [!code error]
			<div className={clsx("storyContext__narrow")}>
				<Story />
			</div>
		),
	],
} satisfies Meta<typeof TextField>;

export default meta;
