---
title: Order Screen Docs for Two Readers
titleKo: 화면 문서는 두 독자 순서로 짭니다
impact: HIGH
impactDescription: 사람은 머리와 구역 절만 읽고 결론을 알고 구현하는 쪽은 Structure와 Check까지 읽어 코드 없이 구현하게 합니다
appliesWhen:
  - 화면 문서를 쓰거나 절을 옮길 때
  - 화면 문서에 새 절을 더할 때
tags: structure, screen, overview, part
---

## Order Screen Docs for Two Readers

**Impact: HIGH (사람은 머리와 구역 절만 읽고 결론을 알고 구현하는 쪽은 Structure와 Check까지 읽어 코드 없이 구현하게 합니다)**

화면 문서는 머리와 네 부분입니다.
머리는 `::part` 없이 두고 나머지는 `::part[Screen]`, `::part[Structure]`, `::part[Check]`, `::part[Reference]`로 엽니다.
위는 무엇을 어떤 순서로 만드는지, 아래로 갈수록 구현과 확인에만 필요한 것입니다.

| 부분 | 절 | 담는 것 |
| --- | --- | --- |
| 머리 | 첫 줄 | 상태와 재료 판. 이어서 화면 요약 두 줄 |
| 머리 | `Overview` | 구역 지도 표 `#`, `Region`, `Content`. 대기와 완료 기준 링크, Shared 안내 한 줄 |
| 머리 | `Plan` | 단계 표. `stage-split-work-into-gated-stages` |
| 머리 | `Questions` | 그 화면의 카드. `question-keep-cards-in-the-screen-doc` |
| `Screen` | 구역마다 절 | 아래 구역 절 순서 |
| `Screen` | `Loading, empty and errors` | 구역마다 대기, 빈 값, 실패, `Check` |
| `Screen` | `Copy` | 화면 글 원문. `Region`, `Where`, `Text` |
| `Structure` | `Reuse` | `Need`, `Use`, `Where`. 이미 있는 부품을 쓰는 자리 |
| `Structure` | `Data and API` | `Endpoint`, `Caller`, `Query ← 출처`. 아래 `### Mock` |
| `Structure` | `State` | `Key`, `Default`, `Changed by` |
| `Structure` | `Rules` | `Rule`, `Detail`, `Code`. 여러 구역이 쓰는 계산 |
| `Structure` | `Chart mappers` | 차트가 있는 화면만. `Input`, `Output`, `Golden` |
| `Structure` | `Tree` | 화면 폴더 나무 |
| `Check` | `Scenarios` | 테스트 파일별 시나리오 표. `stage-derive-checks-from-state-tables` |
| `Reference` | `Sources` | 읽은 재료, 그림을 다시 뜨는 명령. `:::details[…]{open}` |

구역 절은 아래 순서를 지킵니다. 없는 자리는 건너뛰고 순서는 바꾸지 않습니다.

| 순서 | 자리 |
| --- | --- |
| 1 | 결론 한 줄 |
| 2 | 표시 그림. `writing-show-regions-as-marked-figma-figures` |
| 3 | 부분 표 `#`, `Part`, `Rule`, `Figma`. `#`은 그림의 표시 번호 |
| 4 | API 표 `API`, `Hook`, `For` |
| 5 | 코드 나무. `writing-draw-flows-with-mermaid-and-trees-as-text` |
| 6 | 그 구역만의 규칙 표, Mermaid, 목록 |

절 제목 바로 아래 한 줄이 그 절의 결론입니다. 그 줄만 읽고 넘어가도 되게 씁니다.
머리 절은 `Overview`이고 `Screen` 부분과 이름을 겹치지 않습니다.
대기, 빈 값, 실패를 다루는 절도 `State`와 겹치지 않게 `Loading, empty and errors`입니다.
절을 더할 때는 어느 부분에 속하는지 먼저 정합니다. 부분 밖에 절을 두지 않습니다.
두 화면 이상이 쓰는 규칙과 글은 `structure-define-shared-behavior-once`대로 내용을 쓰고 링크를 겁니다.

**Correct (머리와 네 부분, 구역 절 순서를 갖춘 화면 문서 틀입니다. 복사해 시작합니다):**

<<< ../examples/structure-order-screen-docs-for-two-readers/01-correct.markdown
