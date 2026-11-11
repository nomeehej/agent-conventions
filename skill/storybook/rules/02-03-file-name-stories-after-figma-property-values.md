---
title: Name Stories After Figma Property Values
titleKo: story export 이름은 Figma 속성 값으로 짓습니다
impact: HIGH
impactDescription: story 이름, Figma variant, 테스트 이름이 한 낱말이라 어긋난 상태를 이름 대조로 찾습니다
appliesWhen:
  - story export를 추가하거나 이름을 바꿀 때
  - Figma 속성 값이나 `examples` 칸 이름이 바뀌었을 때
tags: file, naming, figma, export
---

## Name Stories After Figma Property Values

**Impact: HIGH (story 이름, Figma variant, 테스트 이름이 한 낱말이라 어긋난 상태를 이름 대조로 찾습니다)**

export 이름은 그 story가 보여 주는 Figma 속성 값을 PascalCase로 씁니다(`Value=Placeholder` → `Placeholder`).
값 둘을 합친 story는 Figma 속성 차례대로 값을 잇습니다(`PlaceholderError`).
Figma `examples` 칸의 모습은 칸 이름을 그대로 씁니다.
첫 story는 meta `args`의 기본값으로 렌더하는 story이고 같은 축의 다른 story와 갈리는 값(`Filled`)으로 부릅니다.
Figma 기본 variant는 set의 왼쪽 위라 코드의 기본 프롭과 다를 수 있습니다.
export 이름은 story id와 story 테스트 이름이 됩니다.

| 이름 | 처리 |
| --- | --- |
| Figma 값과 다른 낱말(`Default`, `Empty`, `WithError`) | Figma 값(`Filled`, `Placeholder`, `Error`)으로 바꿉니다 |
| `name`으로 바꾼 표시 이름 | 두지 않습니다. story id의 근거는 export 이름 하나입니다 |
| JavaScript 전역과 겹치는 값(`Error`) | 지역 이름만 바꾸고 `export {ErrorStory as Error}`로 내보냅니다 |

참고: [Storybook 문서: story 고유 링크](https://storybook.js.org/docs/configure/user-interface/sidebar-and-urls).

**Incorrect 1 (Figma에 없는 낱말로 기본 story와 상태 story를 부릅니다):**

<<< ../examples/file-name-stories-after-figma-property-values/01-incorrect.stories.tsx

**Correct 1 (Figma 속성 값을 그대로 export 이름으로 씁니다):**

<<< ../examples/file-name-stories-after-figma-property-values/02-correct.stories.tsx
