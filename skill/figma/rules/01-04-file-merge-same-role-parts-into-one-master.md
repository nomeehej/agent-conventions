---
title: Merge Same-Role Code Parts into One Master
titleKo: 같은 역할의 코드 부품 둘은 master 하나로 합칩니다
impact: HIGH
impactDescription: 디자이너가 역할마다 부품 하나만 고르고 코드에서 합칠 부품이 목차와 노트로 드러납니다
appliesWhen:
  - 같은 역할의 코드 부품 둘 이상을 Figma에 그릴 때
  - 목차의 `코드에만 있음` 카드를 만들거나 고치거나 지울 때
tags: file, master, merge, index
---

## Merge Same-Role Code Parts into One Master

**Impact: HIGH (디자이너가 역할마다 부품 하나만 고르고 코드에서 합칠 부품이 목차와 노트로 드러납니다)**

코드에 같은 역할의 부품이 둘이면 Figma에는 master 하나로 그리고 둘의 차이는 그 master의 속성으로 옮깁니다.
코드도 하나로 합쳐야 하면 그 master 옆 노란 노트로 알립니다.
master를 그리지 않는 코드 부품은 ❖ 페이지 없이 `# ui`, `# widget` 목차의 `코드에만 있음` 카드로 둡니다.

| 코드 부품 | Figma |
| --- | --- |
| 같은 역할 둘. `checkbox`와 `checkbox-button` | master `checkbox` 하나. 차이는 `Label` 속성. 목차 카드 `합침 → checkbox` |
| 감싸기만 하는 부품. provider, `Suspense` 경계 | ❖ 페이지 없이 `코드에만 있음` 카드 |
| 다른 부품의 조합 | 그 부품 ❖ 페이지의 예시 frame. 목차 카드 `예시 → ❖ <부품>` |

코드가 합쳐지면 노트를 지우고 `코드에만 있음` 카드도 지웁니다.
카드의 상태 말은 `note-describe-masters-with-purpose-and-code-path`가 정합니다.

**Incorrect 1 (같은 역할의 코드 부품을 master 둘로 따로 그립니다):**

<<< ../examples/file-merge-same-role-parts-into-one-master/01-incorrect.markdown

**Correct 1 (master 하나에 속성으로 합치고 목차와 노트에 합친 사실을 남깁니다):**

<<< ../examples/file-merge-same-role-parts-into-one-master/02-correct.markdown
