---
title: Show Compositions in the Examples Frame
titleKo: 부품을 조합한 story만 `examples` frame에 그립니다
impact: MEDIUM
impactDescription: 행렬로 보여 주지 못하는 조합만 예시로 남고 예시 칸 이름으로 story를 바로 찾습니다
appliesWhen:
  - ❖ 페이지에 예시 frame이나 예시 칸을 만들 때
  - story를 Figma variant나 예시 칸에 대응시킬 때
reviewWith: storybook/story-cover-every-figma-value-once
tags: layer, example, story
---

## Show Compositions in the Examples Frame

**Impact: MEDIUM (행렬로 보여 주지 못하는 조합만 예시로 남고 예시 칸 이름으로 story를 바로 찾습니다)**

여러 부품을 조합한 story만 같은 ❖ 페이지의 `examples` frame에 인스턴스로 그립니다.
variant 하나로 보여 줄 수 있는 story는 예시를 만들지 않고 그 variant에 대응시킵니다.
예시 칸 이름은 그 story의 export 이름과 같게 짓습니다.

| 항목 | 기준 |
| --- | --- |
| frame 이름 | `examples`. 합친 코드 부품의 예시는 `examples/<부품>` |
| 맨 위 | `_header`. 예시 칸 이름 목록과 Storybook 경로 |
| 칸 | 인스턴스만 둡니다. master를 두지 않고 칸 이름표는 `_captions`로 답니다 |
| 자리 | 섹션과 같은 x, 같은 폭. 칸은 master 상자와 같은 기준선부터 놓습니다 |
| 행렬에 안 보이는 켜기 속성 | `Options` 칸 하나에 모아도 됩니다 |

**Incorrect 1 (master를 복사해 조합을 그리고 variant 하나로 되는 story까지 예시로 둡니다):**

<<< ../examples/layer-show-compositions-in-the-examples-frame/01-incorrect.markdown

**Correct 1 (조합 story만 인스턴스로 그리고 칸 이름을 export 이름과 맞춥니다):**

<<< ../examples/layer-show-compositions-in-the-examples-frame/02-correct.markdown
