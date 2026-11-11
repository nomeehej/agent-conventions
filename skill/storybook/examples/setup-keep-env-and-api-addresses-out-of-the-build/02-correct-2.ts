// .storybook/main.ts
import type {StorybookConfig} from "@storybook/react-vite";

const config: StorybookConfig = {
	stories: ["../src/component/**/*.stories.tsx"],
	addons: ["@storybook/addon-designs", "@storybook/addon-vitest", "@storybook/addon-a11y"],
	framework: {
		name: "@storybook/react-vite",
		// [!code ++]
		options: {builder: {viteConfigPath: ".storybook/vite.config.ts"}},
	},
	core: {disableTelemetry: true},
};

export default config;
