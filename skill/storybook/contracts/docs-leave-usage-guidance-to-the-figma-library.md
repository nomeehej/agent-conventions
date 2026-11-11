# Leave Usage Guidance to the Figma Library

**Impact: MEDIUM (사용 지침이 한 곳에만 있어 Figma와 Storybook의 설명이 서로 어긋나지 않습니다)**

Storybook은 코드의 지금 모습만 보여 주고 사용 지침과 의도는 Figma 라이브러리의 안내 페이지와 master 설명에 둡니다.
MDX 문서와 `autodocs` 태그를 두지 않고 story 파일의 주석은 코드가 말하지 않는 사실만 `//` 상자에 적습니다.
설명 페이지가 꼭 필요하면 `@storybook/addon-docs`를 다시 켤지 먼저 정합니다.
`parameters.docs.description`은 그 addon의 Docs 블록이 읽으므로 addon 없이는 어디에도 보이지 않습니다.

| 내용 | 자리 |
| --- | --- |
| 언제 쓰는지, 쓰지 않을 때, 문구 지침 | Figma 안내 페이지와 master 설명에 둡니다 |
| 프롭 대응, `play`가 만드는 상태, 부모 문맥의 출처 | story 파일의 `//` 상자에 둡니다 |

참고: [Storybook 문서: Autodocs](https://storybook.js.org/docs/writing-docs/autodocs#set-up-automated-documentation),
[Storybook 문서: 설명 쓰기](https://storybook.js.org/docs/api/doc-blocks/doc-block-description#writing-descriptions).

**Incorrect 1 (사용 지침을 JSDoc으로 적고 `autodocs`로 문서 페이지를 만듭니다):**

```tsx
// src/component/ui/button/button.stories.tsx
import type {Meta} from "@storybook/react-vite";
import {fn} from "storybook/test";

import {Button} from "@/component/ui/button/button";

/**
 * 화면마다 저장 같은 주요 동작 하나에만 primary를 씁니다.
 * 취소, 닫기 같은 보조 동작은 secondary로 둡니다.
 */
const meta = {
	title: "component/ui/button",
	component: Button,
	tags: ["autodocs"],
	args: {children: "저장", variant: "primary", onClick: fn()},
} satisfies Meta<typeof Button>;

export default meta;
```

**Correct 1 (지침은 Figma에 두고 story 파일에는 코드가 말하지 않는 사실만 적습니다):**

```tsx
// src/component/ui/button/button.stories.tsx
import type {Meta} from "@storybook/react-vite";
import {fn} from "storybook/test";

import {Button} from "@/component/ui/button/button";

// ----------------------------------------------------------------------------------------
// 버튼 story, 사용 지침은 Figma 라이브러리의 button master 설명
//
// Variant=Fill: variant="primary"
// Variant=Outline: variant="secondary"
// ----------------------------------------------------------------------------------------
const meta = {
	title: "component/ui/button",
	component: Button,
	args: {children: "저장", variant: "primary", onClick: fn()},
} satisfies Meta<typeof Button>;

export default meta;
```

> 나머지 예시와 예외는 [full rule](../rules/05-01-docs-leave-usage-guidance-to-the-figma-library.md)에 있습니다.
