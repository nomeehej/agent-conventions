---
title: Give BE Cards a Figure
titleKo: BE 카드에는 그림을 붙입니다
impact: CRITICAL
impactDescription: 값 이름만 있는 카드를 읽은 사람이 화면의 어느 자리인지 떠올리지 못하는 일을 없앱니다
appliesWhen:
  - B 카드를 쓸 때
  - 사용자가 B 카드의 뜻을 모르겠다고 할 때
tags: question, be, figure, capture
---

## Give BE Cards a Figure

**Impact: CRITICAL (값 이름만 있는 카드를 읽은 사람이 화면의 어느 자리인지 떠올리지 못하는 일을 없앱니다)**

BE 카드는 화면의 자리에서 시작합니다. 필드 이름으로 시작하는 카드는 BE도 기획도 읽지 못합니다.

| 자리 | 내용 |
| --- | --- |
| 제목 줄 | 화면에서 보이는 이름으로 묻는 한 줄. 필드 이름은 `Now`로 |
| `Where` 칸 | 그 값이 보이는 구역 링크와 자리 |
| 그림 | 대상 표 바로 아래 표시 붙인 그림 하나. 표시 번호 1이 그 자리 |
| `Now` | 지금 그리는 필드와 캡처 값 |
| `Ask` 또는 선택지 표 | 값의 뜻이 아니라 기준이나 형식 |

그림은 `writing-show-regions-as-marked-figma-figures`의 표시 그림으로 만들고 `img/<화면>/question-<번호>.png`에 둡니다.
값이 Figma에 없고 응답에만 있으면 그 응답 캡처를 그린 앱 화면도 씁니다. 캡처 날짜를 `Evidence`에 적습니다.
사용자가 뜻을 모르겠다고 한 카드는 같은 번호와 앵커를 두고 본문을 지운 뒤 다시 씁니다.
순서는 `Where`, 그림, `Now`, `Ask`입니다.
값의 뜻을 물을지는 `question-filter-what-needs-another-person`이 정합니다. B 카드는 캡처와 어긋날 때만 묻습니다.

**Incorrect 1 (필드 이름과 내부 용어만 있어 어느 자리의 값인지 알 수 없습니다):**

<<< ../examples/question-give-be-cards-a-figure/01-incorrect.markdown

**Correct 1 (화면의 자리, 표시 그림, 지금 값, 묻는 것 한 줄로 씁니다):**

<<< ../examples/question-give-be-cards-a-figure/02-correct.markdown
