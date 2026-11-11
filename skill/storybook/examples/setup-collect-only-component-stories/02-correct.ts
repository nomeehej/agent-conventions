// .storybook/main.ts
import type {StorybookConfig} from "@storybook/react-vite";

const config: StorybookConfig = {
	// [!code ++]
	stories: ["../src/component/**/*.stories.tsx"],
	// [!code ++]
	addons: ["@storybook/addon-designs", "@storybook/addon-vitest", "@storybook/addon-a11y"],
	framework: "@storybook/react-vite",
	// [!code ++]
	core: {disableTelemetry: true},
};

export default config;
