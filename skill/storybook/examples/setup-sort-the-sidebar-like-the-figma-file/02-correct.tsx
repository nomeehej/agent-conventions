// .storybook/preview.tsx
import type {Preview} from "@storybook/react-vite";

// ----------------------------------------------------------------------------------------
// 사이드바 차례, Figma 라이브러리의 부품 페이지 차례와 일치
//
// order: component 아래 ui, widget 차례
// method: 같은 묶음 안 부품은 이름순, 한 파일의 story는 export 차례 유지
// ----------------------------------------------------------------------------------------
const preview: Preview = {
	parameters: {
		options: {
			// [!code ++]
			storySort: {method: "alphabetical", order: ["component", ["ui", "widget"]]},
		},
	},
};

export default preview;
