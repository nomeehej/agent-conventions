// .storybook/preview.tsx
import type {Preview} from "@storybook/react-vite";
import {sb} from "storybook/test";

import {AppProviders} from "@/app-providers";

import "@/style/token.css";

// 반환값은 story의 beforeEach에서 결정
// [!code ++]
sb.mock("../src/util/date/get-today.ts");

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
