---
title: Name Layers by Role
titleKo: master 안 레이어는 코드 요소와 같은 역할 이름으로 짓습니다
impact: HIGH
impactDescription: 레이어 이름이 코드 BEM 요소 이름과 같아 구현할 때 레이어와 요소를 바로 짝짓습니다
appliesWhen:
  - master 안에 레이어를 만들거나 이름을 바꿀 때
  - master 안에 다른 부품의 인스턴스를 넣을 때
tags: layer, naming, bem
---

## Name Layers by Role

**Impact: HIGH (레이어 이름이 코드 BEM 요소 이름과 같아 구현할 때 레이어와 요소를 바로 짝짓습니다)**

master 안 레이어는 역할을 말하는 Title Case 이름으로 짓습니다.
이름은 코드 BEM 요소와 같은 말을 씁니다. `datePicker__value`는 `Value`, `orderTable__emptyState`는 `Empty State`입니다.
글 내용은 바뀌므로 레이어 이름으로 두지 않습니다.

| 레이어 | 이름 |
| --- | --- |
| 글자, 아이콘, 상자 | 역할 이름. `Label`, `Icon`, `Value`, `Placeholder`, `Box`, `Chevron` |
| master 안의 인스턴스 | 속성으로 내놓으면 그 속성 이름, 아니면 부품 이름 그대로 |
| 아이콘 안 SVG 경로 | `Vector` 그대로 둡니다 |
| Figma 기본 이름. `Frame 12`, `Rectangle 3` | 쓰지 않습니다 |

이름과 글에는 가운뎃점(`·`)을 쓰지 않습니다.
나열은 쉼표로, 경로는 `/`로 씁니다. `component/ui`, `_Matrix/Label`.

**Incorrect 1 (기본 이름과 글 내용이 레이어 이름으로 남습니다):**

<<< ../examples/layer-name-layers-by-role/01-incorrect.markdown

**Correct 1 (코드 요소와 같은 역할 이름을 붙입니다):**

<<< ../examples/layer-name-layers-by-role/02-correct.markdown
