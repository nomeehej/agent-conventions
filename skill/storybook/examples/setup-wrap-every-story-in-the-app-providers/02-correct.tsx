// .storybook/preview.tsx
import type {Preview} from "@storybook/react-vite";

import {AppProviders} from "@/app-providers";

// [!code ++]
import "@/style/token.css";

const preview: Preview = {
	parameters: {layout: "centered"},
	decorators: [
		(Story) => (
			// [!code ++]
			<AppProviders>
				<Story />
			</AppProviders>
		),
	],
};

export default preview;
