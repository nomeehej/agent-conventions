// .storybook/preview.tsx
import type { Preview } from "@storybook/react-vite";

const preview = {
	parameters: {
		// [!code ++]
		a11y: { test: "error" },
	},
} satisfies Preview;

export default preview;
