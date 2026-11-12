// .storybook/preview.tsx
import type {Preview} from "@storybook/react-vite";

// ----------------------------------------------------------------------------------------
// 사이드바 차례
//
// Figma 라이브러리의 부품 페이지 차례와 맞춘다.
//
//   order
//      component 아래에서 ui, widget 차례로 둔다.
//
//   method
//      같은 묶음 안 부품은 이름순으로 두고 한 파일의 story는 export 차례를 유지한다.
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
