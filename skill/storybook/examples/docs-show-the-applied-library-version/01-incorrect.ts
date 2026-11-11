// .storybook/manager.ts
import {addons} from "storybook/manager-api";
import {create} from "storybook/theming/create";

addons.setConfig({
	// [!code error]
	theme: create({base: "light", brandTitle: "관리자 콘솔"}),
});
