// .storybook/manager.ts
import {addons} from "storybook/manager-api";
import {create} from "storybook/theming/create";

addons.setConfig({
	// 코드에 반영을 마친 Figma 라이브러리 버전
	// [!code ++]
	theme: create({base: "light", brandTitle: "관리자 콘솔 DS 1.1.0"}),
});
