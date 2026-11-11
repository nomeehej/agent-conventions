// .storybook/preview.tsx
import type { Preview } from "@storybook/react-vite";

const preview = {
	parameters: {
		// [!code error]
		a11y: { test: "todo" },
	},
} satisfies Preview;

export default preview;
