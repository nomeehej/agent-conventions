// .storybook/vite.config.ts
import {fileURLToPath} from "node:url";
import {defineConfig} from "vite";

// ----------------------------------------------------------------------------------------
// Storybook 전용 vite 설정, 부품 렌더에 필요한 별칭만 사용
//
// envDir false → env 파일 미조회, 공유하는 정적 빌드에 API 주소 미포함
// ----------------------------------------------------------------------------------------
export default defineConfig({
	// [!code ++]
	envDir: false,
	resolve: {alias: {"@": fileURLToPath(new URL("../src", import.meta.url))}},
});
