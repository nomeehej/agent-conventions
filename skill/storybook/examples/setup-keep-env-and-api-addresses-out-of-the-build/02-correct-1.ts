// .storybook/vite.config.ts
import {fileURLToPath} from "node:url";
import {defineConfig} from "vite";

// ----------------------------------------------------------------------------------------
// Storybook 전용 vite 설정
//
// 부품 렌더에 필요한 별칭만 사용한다.
//
//   envDir
//      false이면 env 파일을 읽지 않으므로 공유하는 정적 빌드에 API 주소가 들어가지 않는다.
// ----------------------------------------------------------------------------------------
export default defineConfig({
	// [!code ++]
	envDir: false,
	resolve: {alias: {"@": fileURLToPath(new URL("../src", import.meta.url))}},
});
