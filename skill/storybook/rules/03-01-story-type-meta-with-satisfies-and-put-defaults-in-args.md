---
title: Type Meta with satisfies and Put Shared Defaults in Meta Args
titleKo: meta는 `satisfies Meta`로 쓰고 공통 기본값은 meta `args`에 둡니다
impact: HIGH
impactDescription: 빠진 필수 프롭을 타입 검사가 잡고 story에는 그 상태가 바꾼 값만 남습니다
appliesWhen:
  - story 파일의 meta, `Story` 타입, meta나 story의 `args`를 추가하거나 바꿀 때
  - 콜백 프롭에 넘길 함수를 story에 둘 때
tags: story, meta, args, types
---

## Type Meta with satisfies and Put Shared Defaults in Meta Args

**Impact: HIGH (빠진 필수 프롭을 타입 검사가 잡고 story에는 그 상태가 바꾼 값만 남습니다)**

meta는 `const meta = {…} satisfies Meta<typeof 부품>`으로 쓰고 story 타입은 `StoryObj<typeof meta>`로 씁니다.
`satisfies`로 쓴 meta는 넣은 `args`를 타입에 남겨 story마다 빠진 필수 프롭을 타입 검사가 알립니다.

| 자리 | 둘 것 |
| --- | --- |
| meta `args` | 첫 story가 그대로 렌더하는 기본 프롭 값, 필수 프롭, 콜백 프롭의 `fn()`을 둡니다. `fn()`은 호출을 Actions 패널에 남겨 `play`가 단언할 수 있게 합니다 |
| story `args` | meta 기본값과 다른 값만 둡니다 |
| `const meta: Meta<typeof 부품>` 표기 | 쓰지 않습니다. 빠진 필수 프롭을 타입이 알리지 않습니다 |

참고: [Storybook 문서: satisfies](https://storybook.js.org/docs/configure/integration/typescript#typescript-49-support),
[Storybook 문서: 부품 args](https://storybook.js.org/docs/writing-stories/args#component-args),
[Storybook 문서: fn 감시](https://storybook.js.org/docs/writing-tests/interaction-testing#spying-on-functions-with-fn).

**Incorrect 1 (meta에 타입을 붙여 쓰고 story마다 같은 프롭과 빈 콜백을 되풀이합니다):**

<<< ../examples/story-type-meta-with-satisfies-and-put-defaults-in-args/01-incorrect.stories.tsx

**Correct 1 (`satisfies`로 쓴 meta가 기본값과 `fn()`을 들고 story는 바꾼 값만 둡니다):**

<<< ../examples/story-type-meta-with-satisfies-and-put-defaults-in-args/02-correct.stories.tsx
