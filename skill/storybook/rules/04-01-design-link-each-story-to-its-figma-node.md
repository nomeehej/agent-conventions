---
title: Link Each Story to Its Figma Node
titleKo: story마다 `parameters.design`으로 같은 상태의 Figma 노드를 잇습니다
impact: HIGH
impactDescription: Storybook design 탭이 그 story와 같은 상태의 Figma 노드를 열어 디자인과 코드를 한 화면에서 대조합니다
appliesWhen:
  - story를 추가하거나 story가 보여 주는 Figma 노드가 바뀌었을 때
  - story나 meta의 `parameters.design`을 추가하거나 바꿀 때
tags: design, figma, link
---

## Link Each Story to Its Figma Node

**Impact: HIGH (Storybook design 탭이 그 story와 같은 상태의 Figma 노드를 열어 디자인과 코드를 한 화면에서 대조합니다)**

story마다 `parameters.design`에 그 story와 같은 상태의 Figma 노드 URL을 `node-id`까지 둡니다.
Figma 라이브러리에 master가 없는 부품은 링크를 두지 않고 meta 위 상자에 `코드에만 있음`이라고 적습니다.

| 링크를 두는 자리 | 가리키는 노드 |
| --- | --- |
| 속성 값 story | 그 값의 variant 노드입니다 |
| 값 둘을 합친 story | 그 값들을 합친 variant 노드입니다 |
| `examples` 칸 story | 같은 이름의 `examples` 칸 노드입니다 |
| meta | 두지 않습니다. 모든 story가 한 노드를 가리키게 됩니다 |
| 페이지, 섹션, 파일 | 가리키지 않습니다. 열어도 어느 상태인지 모릅니다 |

참고: [addon-designs: story에 Figma 링크 달기](https://github.com/storybookjs/addon-designs).

**Incorrect 1 (meta 하나가 섹션 노드를 가리켜 모든 story가 같은 링크를 엽니다):**

<<< ../examples/design-link-each-story-to-its-figma-node/01-incorrect.stories.tsx

**Correct 1 (story마다 같은 상태의 variant 노드를 가리킵니다):**

<<< ../examples/design-link-each-story-to-its-figma-node/02-correct.stories.tsx

**Correct (Figma master가 없는 부품은 링크 없이 meta 위 상자에 적습니다):**

<<< ../examples/design-link-each-story-to-its-figma-node/03-correct.stories.tsx
