---
title: Write Only What the Canvas Cannot Show
titleKo: 노트에는 캔버스가 보여 주지 못하는 것만 씁니다
impact: MEDIUM
impactDescription: 노트가 드물어 남은 노트는 읽히고 그림이 바뀌어도 노트와 그림이 어긋나지 않습니다
appliesWhen:
  - 라이브러리 파일에 노트를 달거나 고치거나 정리할 때
  - 부품 구조, 속성 뜻, 코드 이야기를 Figma에 적으려 할 때
tags: note, annotation
---

## Write Only What the Canvas Cannot Show

**Impact: MEDIUM (노트가 드물어 남은 노트는 읽히고 그림이 바뀌어도 노트와 그림이 어긋나지 않습니다)**

노트는 Figma만 봐서는 모르는 기획 변경, 서로 알릴 것, 고민에만 답니다.
구조, 속성 뜻, 크기, 색처럼 캔버스에 보이는 것은 쓰지 않습니다. 그림이 바뀌면 노트만 남아 어긋납니다.
코드 이야기와 Dev Mode 주석도 쓰지 않습니다. 코드의 지금 모습은 Storybook이 보여 줍니다.

| 노트 | 쓰는 때 | 모양 |
| --- | --- | --- |
| 노란 노트 `_note / dated` | 시점이 있는 소통. 기획 변경, 알릴 것, 고민 | 본문, 작성자, 날짜 |
| 회색 노트 `_note` | 날짜 없이 오래 가는 약속. 드물게 씁니다 | 본문 |

노트는 부품 오른쪽에 두고 story마다 달지 않습니다.
고민은 오래 두지 않고 정해서 master에 반영합니다.

**Incorrect 1 (캔버스에 보이는 구조와 코드 이야기를 노트로 적습니다):**

<<< ../examples/note-write-only-what-the-canvas-cannot-show/01-incorrect.markdown

**Correct 1 (Figma만 봐서는 모르는 기획 변경 하나만 노트로 남깁니다):**

<<< ../examples/note-write-only-what-the-canvas-cannot-show/02-correct.markdown
