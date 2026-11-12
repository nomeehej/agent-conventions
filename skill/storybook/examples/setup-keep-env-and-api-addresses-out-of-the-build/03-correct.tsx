// .storybook/preview.tsx
import type {Preview} from "@storybook/react-vite";
import {sb} from "storybook/test";

import {AppProviders} from "@/app-providers";

import "@/style/token.css";

// 값은 story의 beforeEach에서 정하고 정하지 않은 story는 원래 구현을 쓴다.
// [!code ++]
sb.mock("../src/util/date/get-today.ts", {spy: true});

const preview: Preview = {
	parameters: {layout: "centered"},
	decorators: [
		(Story) => (
			<AppProviders>
				<Story />
			</AppProviders>
		),
	],
};

export default preview;
