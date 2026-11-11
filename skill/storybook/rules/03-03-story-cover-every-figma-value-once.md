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

Figma 부품의 속성 값마다 기본 variant에서 그 값만 바꾼 story를 하나 이상 둡니다.
값의 모든 조합을 story로 만들지 않고 조합 story는 Figma `examples` 칸에 있는 것만 둡니다.

| Figma | story |
| --- | --- |
| 코드가 받는 속성 값 | 그 값만 바꾼 story를 하나 둡니다 |
| `examples` 칸 | 칸 이름과 같은 조합 story를 하나 둡니다. 화면이 쓰는 조합이나 값이 겹쳐 배치가 달라지는 조합입니다 |
| 코드가 아직 받지 않는 값(variant 설명의 `코드에 없는 제안`, 코드에 없는 크기) | 코드가 그 값을 받게 될 때 story를 더합니다 |

**Incorrect 1 (Value와 State의 모든 조합을 story로 늘어놓습니다):**

<<< ../examples/story-cover-every-figma-value-once/01-incorrect.stories.tsx

**Correct 1 (값마다 story 하나와 Figma `examples` 칸의 조합 하나만 둡니다):**

<<< ../examples/story-cover-every-figma-value-once/02-correct.stories.tsx
