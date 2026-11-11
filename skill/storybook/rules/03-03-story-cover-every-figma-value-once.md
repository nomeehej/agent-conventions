---
title: Cover Every Figma Property Value at Least Once
titleKo: Figma 속성 값마다 story를 하나 이상 둡니다
impact: HIGH
impactDescription: Figma에 그린 값이 빠짐없이 story로 렌더되고 조합을 늘어놓지 않아 story 수가 값 수를 따라갑니다
appliesWhen:
  - 부품에 프롭이나 상태를 더하거나 Figma 부품에 속성 값이 생겼을 때
  - story를 새로 쓰거나 조합 story를 더하거나 지울 때
tags: story, coverage, figma
---

## Cover Every Figma Property Value at Least Once

**Impact: HIGH (Figma에 그린 값이 빠짐없이 story로 렌더되고 조합을 늘어놓지 않아 story 수가 값 수를 따라갑니다)**

Figma 부품의 속성 값마다 meta 기본값에서 그 값만 바꾼 story를 하나 이상 둡니다.
값의 모든 조합을 story로 만들지 않고 화면이 쓰는 조합만 둡니다.

| Figma | story |
| --- | --- |
| 코드가 받는 속성 값 | 그 값만 바꾼 story를 하나 둡니다 |
| 값 둘을 합친 variant | 화면이 쓰거나 값이 겹쳐 배치가 달라지는 조합만 story 하나를 둡니다. 그 variant 노드에 잇습니다 |
| `examples` 칸 | variant 하나로 보여 줄 수 없는 모습(열린 달력, 부품을 조합한 모습)이라 칸 이름과 같은 story를 하나 둡니다 |
| 코드가 아직 받지 않는 값(variant 설명의 `코드에 없는 제안`, 코드에 없는 크기) | 코드가 그 값을 받게 될 때 story를 더합니다 |
| 코드가 CSS 의사 클래스로 그리는 상태(Hover, Focus, Pressed) | story를 두지 않습니다. 프롭이 없어 story로 만들 값이 없습니다 |

**Incorrect 1 (Value와 State의 모든 조합을 story로 늘어놓습니다):**

<<< ../examples/story-cover-every-figma-value-once/01-incorrect.stories.tsx

**Correct 1 (값마다 story 하나와 화면이 쓰는 조합 하나만 둡니다):**

<<< ../examples/story-cover-every-figma-value-once/02-correct.stories.tsx
