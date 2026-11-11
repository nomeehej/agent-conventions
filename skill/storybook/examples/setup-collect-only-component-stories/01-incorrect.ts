// .storybook/main.ts
import type {StorybookConfig} from "@storybook/react-vite";

const config: StorybookConfig = {
	// [!code error]
	stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
	addons: [
		// [!code error]
		"@chromatic-com/storybook",
		"@storybook/addon-vitest",
		"@storybook/addon-a11y",
		// [!code error]
		"@storybook/addon-docs",
		// [!code error]
		"@storybook/addon-onboarding",
	],
	framework: "@storybook/react-vite",
};

export default config;
