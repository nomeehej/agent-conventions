---
title: Describe Masters with Purpose and Code Path
titleKo: master 설명은 용도 한 줄과 코드 경로로 씁니다
impact: MEDIUM
impactDescription: 화면 디자이너는 부품을 고를 때 용도를, 개발은 Dev Mode에서 코드 위치를 바로 읽습니다
appliesWhen:
  - master나 variant의 설명을 쓰거나 고칠 때
  - 목차 카드의 상태 말을 정하거나 바꿀 때
tags: note, description, index
---

## Describe Masters with Purpose and Code Path

**Impact: MEDIUM (화면 디자이너는 부품을 고를 때 용도를, 개발은 Dev Mode에서 코드 위치를 바로 읽습니다)**

master 설명은 용도 한 줄과 코드 경로 한 줄로 씁니다.
속성 뜻, 크기, 변경 이력은 설명에 쓰지 않습니다.
코드에 없는 상태는 그 variant 설명을 `코드에 없는 제안.`으로 시작합니다.
아이콘 master(`icon/<이름>`)는 이름이 코드 파일과 짝이라 설명을 두지 않아도 됩니다.

목차 카드의 상태 말은 master가 있는 부품과 없는 부품으로 갈립니다.

| master가 있는 부품의 카드 | 상태 말 |
| --- | --- |
| master 하나 | `N variants` |
| master 둘 이상 | `master N` |

master가 없는 코드 부품은 `코드에만 있음` 카드 안에 부품마다 한 줄로 적습니다.
카드는 `file-merge-same-role-parts-into-one-master`가 정합니다.

| `코드에만 있음` 카드 안의 부품 | 상태 말 |
| --- | --- |
| 다른 master에 합친 코드 부품 | `합침 → <부품>` |
| 예시로 옮긴 코드 부품 | `예시 → ❖ <부품>` |
| 그릴 화면이 없는 코드 부품 | `코드만` |
| master 없이 정해진 방식으로 그리는 코드 부품 | 그 방식 한 줄. `auto layout frame으로 그림` |
| 아직 그리지 않은 부품 | `준비 중` |

**Incorrect 1 (설명에 구현 세부와 이력을 늘어놓고 코드 경로가 없습니다):**

<<< ../examples/note-describe-masters-with-purpose-and-code-path/01-incorrect.markdown

**Correct 1 (용도와 코드 경로만 쓰고 제안 variant와 목차 카드에 정해진 말을 씁니다):**

<<< ../examples/note-describe-masters-with-purpose-and-code-path/02-correct.markdown
