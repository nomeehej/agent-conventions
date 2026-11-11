// .storybook/preview.tsx
import type {Preview} from "@storybook/react-vite";

const preview: Preview = {
	parameters: {
		options: {
			// [!code error]
			storySort: {method: "alphabetical", includeNames: true},
		},
	},
};

export default preview;
