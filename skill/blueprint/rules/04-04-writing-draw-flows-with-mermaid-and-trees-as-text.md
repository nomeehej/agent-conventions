---
title: Draw Flows with Mermaid and Trees as Text
titleKo: 흐름은 Mermaid, 나무는 주석 단 text 블록으로 그립니다
impact: HIGH
impactDescription: 한글이 든 ASCII 상자가 줄 어긋나는 일을 없애고 폴더 나무와 설명을 한눈에 함께 읽게 합니다
appliesWhen:
  - 설계 문서에서 흐름, 구조, 순서를 그림으로 그릴 때
  - 설계 문서에 폴더나 라우트 나무를 그릴 때
  - 설계 문서에 ASCII 상자로 흐름이나 구조를 그리려 할 때
  - 제외: 화면 모양을 보여 주는 경우
tags: writing, mermaid, tree, diagram
---

## Draw Flows with Mermaid and Trees as Text

**Impact: HIGH (한글이 든 ASCII 상자가 줄 어긋나는 일을 없애고 폴더 나무와 설명을 한눈에 함께 읽게 합니다)**

흐름은 뜻에 맞는 Mermaid 종류로, 나무는 `text` 코드 블록으로 그립니다. 칸이 필요한 것은 표로 씁니다.

| 그리는 것 | 종류 |
| --- | --- |
| 판단 사슬, 순서 | `flowchart LR`. 예 갈래를 한 줄로 잇기 |
| 요청 왕복 | `sequenceDiagram` |
| 상태 전이 | `stateDiagram-v2` |
| 폴더, 라우트, 컴포넌트 소유 | ` ```text [src/page/orders/] ` 블록. 제목 칸에 나무의 뿌리 경로 |
| 비교, 행렬, 열 폭 | 표 |

나무는 `├──`, `└──`, `│`로 그리고 설명은 줄 끝 `// ` 주석으로 붙입니다. 주석 시작 열을 한 블록 안에서 맞춥니다.
한글은 주석 뒤에만 씁니다. 주석 앞이 ASCII뿐이어야 고정폭 글꼴에서 열이 맞습니다.
나무에 담지 못한 설명은 블록 아래 짧은 목록으로 씁니다. Mermaid `treeView-beta`는 주석을 못 달아 쓰지 않습니다.
Mermaid 라벨은 개조식이고 괄호를 피하며 긴 라벨은 `<br>`로 나눕니다. 선 라벨은 한 낱말입니다.
가로가 넓어지면 `LR`을 `TD`로 바꾸거나 그림을 둘로 나눕니다. 되돌아가는 선은 상자를 합쳐 없앱니다.
한글이 든 ASCII 상자와 표는 쓰지 않습니다. 한글 폭이 정확히 두 칸이 아니어서 줄이 어긋납니다.

**Incorrect 1 (한글이 든 ASCII 상자로 흐름을 그리고 나무의 설명을 주석 없이 섞습니다):**

<<< ../examples/writing-draw-flows-with-mermaid-and-trees-as-text/01-incorrect.markdown

**Correct 1 (흐름은 flowchart, 나무는 주석 열을 맞춘 text 블록으로 그립니다):**

<<< ../examples/writing-draw-flows-with-mermaid-and-trees-as-text/02-correct.markdown
