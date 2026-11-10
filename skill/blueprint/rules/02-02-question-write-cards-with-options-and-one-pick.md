---
title: Write Cards with Options and One Pick
titleKo: 카드는 선택지와 추천 하나로 씁니다
impact: CRITICAL
impactDescription: 답하는 사람이 카드만 읽고 고를 수 있게 해서 질문이 설명문이 되지 않게 합니다
appliesWhen:
  - 화면 문서나 `questions.md`에 카드를 추가하거나 고칠 때
  - 사용자가 질문을 읽고 답을 못 고르겠다고 할 때
tags: question, card, options
---

## Write Cards with Options and One Pick

**Impact: CRITICAL (답하는 사람이 카드만 읽고 고를 수 있게 해서 질문이 설명문이 되지 않게 합니다)**

열린 카드는 제목 줄, 대상 표, 선택지 표, 항목 목록 순서입니다. 경위와 작업 이야기는 적지 않습니다.

| 자리 | 내용 |
| --- | --- |
| 제목 줄 | `:::details[번호 질문 한 줄 Status]`. 번호는 칩, 상태는 줄 오른쪽 끝 알약 |
| 대상 표 | `To`, `Blocks`, `Where` 한 줄. 누구에게, 막는 Plan 단계나 `없음`, 화면의 자리 링크 |
| 그림 | 자리가 글로 안 잡히면 표시 붙인 그림 하나. B 카드는 `question-give-be-cards-a-figure` |
| 선택지 표 | `Option`, `Answer`, `FE change`. `A`, `B`, `C` 한 줄씩. 추천 하나에만 금색 별 그림 `img/star.svg` |
| 항목 목록 | `- Now =`, `- Why =`, `- Evidence =`, `- Ask =`, `- Fallback =` 가운데 필요한 것만 |

| 항목 | 내용 |
| --- | --- |
| `Now` | 지금 동작이나 지금 그린 꼴 |
| `Why` | 추천 이유 한 줄 |
| `Evidence` | 재료 링크. Figma 노드, 캡처, spec 커밋 |
| `Ask` | 상대에게 묻는 것 한 줄. 상대가 읽으므로 완전한 문장 |
| `Fallback` | 답 전에 쓰는 값. 있으면 그 질문은 단계를 막지 않습니다 |

항목 이름은 이 목록에서만 고릅니다. 새 항목 이름을 만들지 않습니다.
열린 카드의 상태는 답하는 사람으로 정합니다.

| 상태 | 뜻 |
| --- | --- |
| `Waiting on plan` | 기획이 답할 Q 카드 |
| `Waiting on BE` | BE가 답할 B 카드 |
| `User decides` | 사용자가 답할 R 카드 |
| `Needs answer` | 답할 사람을 아직 못 정한 카드 |

선택지가 있는 카드의 추천은 정확히 하나입니다. 추천이 없으면 선택지 표를 두지 않고 `Ask` 한 줄로 묻습니다.
카드 안에는 접기를 넣지 않습니다. 근거가 길면 먼저 줄이고, 남는 근거는 변경 문서에 두고 `Evidence`에 링크만 둡니다.

**Incorrect 1 (경위와 속뜻을 문장으로 풀어 답하는 사람이 고를 자리를 못 찾습니다):**

<<< ../examples/question-write-cards-with-options-and-one-pick/01-incorrect.markdown

**Correct 1 (대상 표, 선택지와 추천 하나, 이유 한 줄로 짧게 끝냅니다):**

<<< ../examples/question-write-cards-with-options-and-one-pick/02-correct.markdown
