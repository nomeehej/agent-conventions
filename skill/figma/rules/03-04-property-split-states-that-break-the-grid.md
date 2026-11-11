---
title: Split States That Break the Grid
titleKo: 행렬의 오와 열을 깨는 상태만 따로 master로 뺍니다
impact: HIGH
impactDescription: 모양이 다른 상태 하나 때문에 행렬이 무너지지 않고 축이 독립인 큰 set은 한 set으로 남습니다
appliesWhen:
  - set에 상태나 속성 값을 더할 때
  - variant 수가 많아 set을 나눌지 정할 때
tags: property, variant, split
---

## Split States That Break the Grid

**Impact: HIGH (모양이 다른 상태 하나 때문에 행렬이 무너지지 않고 축이 독립인 큰 set은 한 set으로 남습니다)**

크기나 구조가 달라 행렬의 오와 열이 맞지 않는 상태만 따로 master로 뺍니다.
축끼리 독립이면 variant가 많아도 한 set으로 둡니다. `button`은 `Color` × `Variant` × `Size` × `State` 135개입니다.
공식 `figma-generate-library`의 variant 30개 상한은 따르지 않습니다.

| 새 값 | 처리 |
| --- | --- |
| 같은 칸 크기와 구조에 들어감 | 기존 set의 축에 값을 더합니다 |
| 그 값만 크기나 구조가 다름. 스피너로 폭이 바뀌는 제출 중 버튼 | 따로 master로 뺍니다. 이름은 `<상태>-<부품>`. `loading-button` |
| 다른 축의 일부와만 어울림 | 쓰지 않는 조합은 만들지 않습니다 |

뺀 master는 본 master와 같은 섹션에 두고 축 이름과 값은 본 master와 같게 씁니다.

**Incorrect 1 (폭이 다른 Loading을 같은 set에 넣어 열이 어긋납니다):**

<<< ../examples/property-split-states-that-break-the-grid/01-incorrect.markdown

**Correct 1 (Loading만 `loading-button`으로 빼고 `button`은 한 set으로 둡니다):**

<<< ../examples/property-split-states-that-break-the-grid/02-correct.markdown
