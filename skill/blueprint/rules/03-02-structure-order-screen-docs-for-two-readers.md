---
title: Order Screen Docs for Two Readers
titleKo: 화면 문서는 두 독자 순서로 짭니다
impact: HIGH
impactDescription: 사람은 위 절만 읽고 결론을 알고 에이전트는 접힌 상세까지 읽어 구현하게 합니다
appliesWhen:
  - 화면 문서를 쓰거나 절을 옮길 때
  - 화면 문서에 새 절을 더할 때
tags: structure, screen, overview
---

## Order Screen Docs for Two Readers

**Impact: HIGH (사람은 위 절만 읽고 결론을 알고 에이전트는 접힌 상세까지 읽어 구현하게 합니다)**

화면 문서는 세 가름입니다.
첫 가름은 `::part` 없이 문서 머리에 두고 둘째, 셋째는 `::part[Screen]`, `::part[Structure]`로 엽니다.
위는 사람이 먼저 알 것, 아래는 구현할 때만 필요한 것입니다.

| 가름 | 절 | 담는 것 |
| --- | --- | --- |
| `Overview` | `Capture` | 캡처 한 장과 번호 설명 목록 |
| `Overview` | `Decisions` | 큰 결정 셋. 한 줄씩 결정 글, 번호는 링크 없이 글로 |
| `Overview` | `Remaining` | 단계 표, 열린 카드 수, Follow-up 목록, Expected from BE 표 |
| `Screen` | 구역마다 절 | 흐름 Mermaid, 모양 표, 대기, 빈 결과, 오류 상태, 접힌 구현 상세 |
| `Structure` | `Reuse` | 가져올 것 |
| `Structure` | `Data and API` | endpoint, 조회 흐름. 응답 필드는 `:::details`에 |
| `Structure` | `State` | 상태 자리와 경계 |
| `Structure` | `Tree` | 컴포넌트 나무 |
| `Structure` | `Sources` | 읽은 출처, 재료 대조표 |

절 제목 바로 아래 한 줄이 그 절의 결론입니다. 그 줄만 읽고 넘어가도 되게 씁니다.
구역 절의 치수와 계약은 `:::details[구현 상세]`에 접습니다. 문서 첫 줄은 상태와 재료 판입니다.
절을 더할 때는 어느 가름에 속하는지 먼저 정합니다. 가름 밖에 절을 두지 않습니다.

**Correct (세 가름과 절 순서를 갖춘 화면 문서 틀입니다. 복사해 시작합니다):**

<<< ../examples/structure-order-screen-docs-for-two-readers/01-correct.markdown
