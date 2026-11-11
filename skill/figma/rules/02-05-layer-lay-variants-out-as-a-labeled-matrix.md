---
title: Lay Variants Out as a Labeled Matrix
titleKo: variant는 이름표를 단 행렬로 놓습니다
impact: MEDIUM
impactDescription: 행렬만 보고 빠진 조합을 찾고 끌어다 놓은 인스턴스가 늘 같은 기본 variant로 나옵니다
appliesWhen:
  - set 안 variant를 배치하거나 다시 배치할 때
  - 행렬 이름표, 괄호선, 칸을 그리거나 고칠 때
tags: layer, variant, matrix
---

## Lay Variants Out as a Labeled Matrix

**Impact: MEDIUM (행렬만 보고 빠진 조합을 찾고 끌어다 놓은 인스턴스가 늘 같은 기본 variant로 나옵니다)**

variant는 행에 `Size` → `State`, 열에 나머지 속성을 두는 행렬로 놓습니다.
Figma는 set의 왼쪽 위 variant를 기본 variant로 씁니다.
`Size`를 작은 것부터 행에 두므로 기본 variant는 `Size=Small`입니다.
코드의 기본 프롭 값(`Medium`)과 다를 수 있습니다.
행렬 차례를 바꾸면 `defaultVariant`가 무엇인지 다시 확인합니다.

| 자리 | 놓는 것 |
| --- | --- |
| 행 | `Size` → `State`. 둘 다 없으면 마지막 속성 |
| 열 | 나머지 속성. `Color` → `Variant`. 나머지가 없으면 마지막 행 속성 |
| 이름표, 괄호선, 칸 | ✱ utility의 `_Matrix` 인스턴스만 씁니다. 글자나 선을 직접 그리지 않습니다 |
| 상자 왼쪽 끝 | 페이지의 모든 master 상자를 한 기준선에 맞춥니다 |
| 한 줄에 놓인 상자 | 위 끝을 맞춥니다 |

이름표와 선은 보라 한 색입니다.
Figma가 set과 component를 그리는 색이라 문서 표시로 읽히고 제품 색과 섞이지 않습니다.
색, 글꼴을 바꿀 때는 `_Matrix` 부품만 고칩니다.

참고: [Figma 도움말: 컴포넌트 속성](https://help.figma.com/hc/en-us/articles/5579474826519).

**Incorrect 1 (variant가 만든 순서대로 한 줄에 놓이고 이름표를 글자로 그립니다):**

<<< ../examples/layer-lay-variants-out-as-a-labeled-matrix/01-incorrect.markdown

**Correct 1 (`Size` → `State`를 행, 나머지를 열로 두고 `_Matrix` 이름표를 답니다):**

<<< ../examples/layer-lay-variants-out-as-a-labeled-matrix/02-correct.markdown
