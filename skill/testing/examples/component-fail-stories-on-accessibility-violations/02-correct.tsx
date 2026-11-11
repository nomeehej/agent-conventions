// .storybook/preview.tsx
import type { Preview } from "@storybook/react-vite";

const preview = {
	parameters: {
		// [!code ++]
		a11y: { test: "error" },
	},
} satisfies Preview;

// biome-ignore lint/style/noDefaultExport: Storybook이 default export를 읽음
export default preview;
