# Map Figma Properties to Props in the Comment Box Above Meta

**Impact: MEDIUM (Figma 값을 보고 story를 쓸 때 맞는 프롭 값을 그 자리에서 찾아 없는 값을 쓰지 않습니다)**

Figma 속성과 프롭의 이름이나 값이 다르면 meta 위 상자에 `속성=값: 프롭` 목록으로 대응을 적습니다.
이름과 값이 같은 속성은 적지 않습니다.
프롭 이름을 Figma에 맞출지는 부품 설계가 정하고 이 목록은 지금의 대응만 적습니다.

**Incorrect 1 (대응을 적지 않아 Figma 값을 그대로 없는 프롭 값으로 씁니다):**

```tsx
// src/component/ui/button/button.stories.tsx
import type {Meta, StoryObj} from "@storybook/react-vite";
import {fn} from "storybook/test";

import {Button} from "@/component/ui/button/button";

const meta = {
	title: "component/ui/button",
	component: Button,
	args: {children: "저장", variant: "primary", onClick: fn()},
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Fill: Story = {};

export const Outline: Story = {args: {variant: "outline"}};

export const Disabled: Story = {args: {disabled: true}};
```

**Correct 1 (이름이 다른 속성만 meta 위 상자에 프롭과 짝지어 적습니다):**

```tsx
// src/component/ui/button/button.stories.tsx
import type {Meta, StoryObj} from "@storybook/react-vite";
import {fn} from "storybook/test";

import {Button} from "@/component/ui/button/button";

// ----------------------------------------------------------------------------------------
// 버튼 story, Figma 속성과 이름이 다른 프롭 대응
//
// Variant=Fill: variant="primary"
// Variant=Outline: variant="secondary"
// State=Disabled: disabled
// ----------------------------------------------------------------------------------------
const meta = {
	title: "component/ui/button",
	component: Button,
	args: {children: "저장", variant: "primary", onClick: fn()},
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Fill: Story = {};

export const Outline: Story = {args: {variant: "secondary"}};

export const Disabled: Story = {args: {disabled: true}};
```

> 나머지 예시와 예외는 [full rule](../rules/04-03-design-map-figma-properties-to-props-in-the-meta-box.md)에 있습니다.
