---
title: Map Figma Properties to Props in the Comment Box Above Meta
titleKo: Figma 속성과 이름이 다른 프롭은 meta 위 상자에 대응을 적습니다
impact: MEDIUM
impactDescription: Figma 값을 보고 story를 쓸 때 맞는 프롭 값을 그 자리에서 찾아 없는 값을 쓰지 않습니다
appliesWhen:
  - Figma 속성 이름이나 값과 다른 프롭으로 story를 쓸 때
  - 부품 프롭이나 Figma 속성의 이름, 값을 바꿀 때
tags: design, figma, props, comments
---

## Map Figma Properties to Props in the Comment Box Above Meta

**Impact: MEDIUM (Figma 값을 보고 story를 쓸 때 맞는 프롭 값을 그 자리에서 찾아 없는 값을 쓰지 않습니다)**

Figma 속성과 프롭의 이름이나 값이 다르면 meta 위 상자에 `속성=값` 항목을 두고 설명에 대응하는 프롭을 적습니다.
이름과 값이 같은 속성은 적지 않습니다.
프롭 이름을 Figma에 맞출지는 부품 설계가 정하고 이 목록은 지금의 대응만 적습니다.

**Incorrect 1 (대응을 적지 않아 Figma 값을 그대로 없는 프롭 값으로 씁니다):**

<<< ../examples/design-map-figma-properties-to-props-in-the-meta-box/01-incorrect.stories.tsx

**Correct 1 (이름이 다른 속성만 meta 위 상자에 프롭과 짝지어 적습니다):**

<<< ../examples/design-map-figma-properties-to-props-in-the-meta-box/02-correct.stories.tsx
