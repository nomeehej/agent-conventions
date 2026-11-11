# Sort the Sidebar Like the Figma Library

**Impact: MEDIUM (Figma 페이지 목록과 Storybook 사이드바가 같은 차례라 한쪽에서 본 부품을 다른 쪽에서 바로 찾습니다)**

`storySort`는 `{method: "alphabetical", order: ["component", ["ui", "widget"]]}` 하나로 둡니다.
묶음은 `ui` 다음 `widget`이고 묶음 안 부품은 이름순이라 Figma 라이브러리의 부품 페이지 차례와 같습니다.
`includeNames`를 켜지 않으면 한 파일의 story는 export 차례로 섭니다.
그래서 story는 meta `args`의 기본값으로 렌더하는 story부터 Figma 속성 패널의 값 차례로 씁니다.

참고: [Storybook 문서: story 정렬](https://storybook.js.org/docs/writing-stories/naming-components-and-hierarchy).

**Incorrect 1 (story 이름까지 이름순으로 정렬해 Figma 값 차례가 흩어집니다):**

```tsx
// .storybook/preview.tsx
import type {Preview} from "@storybook/react-vite";

const preview: Preview = {
	parameters: {
		options: {
			storySort: {method: "alphabetical", includeNames: true},
		},
	},
};

export default preview;
```

**Correct 1 (묶음과 부품만 정렬하고 story는 파일에 쓴 차례로 둡니다):**

```tsx
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
			storySort: {method: "alphabetical", order: ["component", ["ui", "widget"]]},
		},
	},
};

export default preview;
```

> 나머지 예시와 예외는 [full rule](../rules/01-04-setup-sort-the-sidebar-like-the-figma-file.md)에 있습니다.
