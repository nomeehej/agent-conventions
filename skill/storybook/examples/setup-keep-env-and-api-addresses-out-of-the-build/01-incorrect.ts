// .storybook/vite.config.ts
import {fileURLToPath} from "node:url";
import {defineConfig} from "vite";

export default defineConfig({
	// [!code error]
	envDir: "env",
	resolve: {alias: {"@": fileURLToPath(new URL("../src", import.meta.url))}},
	// [!code error]
	server: {proxy: {"/api": "https://admin-api.example.com"}},
});
