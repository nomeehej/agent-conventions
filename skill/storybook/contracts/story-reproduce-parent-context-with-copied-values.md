# Reproduce the Parent Context with Values Copied from the Parent CSS

**Impact: MEDIUM (story의 부품이 화면에서와 같은 폭과 줄바꿈으로 렌더되고 부모가 바뀌면 고칠 자리를 출처로 찾습니다)**

부모 폭을 따라 모양이 바뀌는 부품은 데코레이터로 부모 상자를 재현합니다.
그 클래스는 preview가 가져오는 `.storybook/story-context.css`에 둡니다.
값은 실제 부모 CSS에서 옮기고 주석 상자에 출처 파일과 클래스, 계산을 적으며 화면에 없는 폭을 지어내지 않습니다.
데코레이터의 `div`는 화면의 부모 요소를 대신하므로
`css/composition-do-not-add-wrapper-elements-for-styling`이 말하는 래퍼가 아닙니다.

참고: [Storybook 문서: 데코레이터](https://storybook.js.org/docs/writing-stories/decorators).

**Incorrect 1 (화면에 없는 폭을 지어 내 부모 문맥으로 씁니다):**

```tsx
// src/component/ui/text-field/text-field.stories.tsx
import type {Meta} from "@storybook/react-vite";
import {clsx} from "clsx";
import {fn} from "storybook/test";

import {TextField} from "@/component/ui/text-field/text-field";

const meta = {
	title: "component/ui/text-field",
	component: TextField,
	args: {label: "상품명", value: "무선 키보드", onChange: fn()},
	decorators: [
		(Story) => (
			<div className={clsx("storyContext__narrow")}>
				<Story />
			</div>
		),
	],
} satisfies Meta<typeof TextField>;

export default meta;
```

```css
/* .storybook/story-context.css */

.storyContext__narrow {
	width: 300px;
}
```

**Correct 1 (실제 부모 CSS의 폭을 출처와 함께 옮깁니다):**

```tsx
// src/component/ui/text-field/text-field.stories.tsx
import type {Meta} from "@storybook/react-vite";
import {clsx} from "clsx";
import {fn} from "storybook/test";

import {TextField} from "@/component/ui/text-field/text-field";

const meta = {
	title: "component/ui/text-field",
	component: TextField,
	args: {label: "상품명", value: "무선 키보드", onChange: fn()},
	decorators: [
		(Story) => (
			<div className={clsx("storyContext__productFilterKeyword")}>
				<Story />
			</div>
		),
	],
} satisfies Meta<typeof TextField>;

export default meta;
```

> 나머지 예시와 예외는 [full rule](../rules/03-04-story-reproduce-parent-context-with-copied-values.md)에 있습니다.
