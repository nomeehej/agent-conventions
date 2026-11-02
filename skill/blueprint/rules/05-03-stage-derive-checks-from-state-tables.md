---
title: Derive Checks from State Tables
titleKo: 검사는 상태 표에서 뽑습니다
impact: HIGH
impactDescription: 설계 문서의 상태 표가 곧 테스트 케이스가 되어 테스트가 문서와 따로 자라지 않게 합니다
appliesWhen:
  - 설계 문서의 상태 표나 흐름도에서 테스트 케이스나 story를 뽑을 때
  - 단계 표의 `Check` 칸을 케이스 ID로 채울 때
requiresSelected: testing/case-describe-one-observable-behavior, testing/story-verify-states-through-consuming-tests
tags: stage, check, testing, story
---

## Derive Checks from State Tables

**Impact: HIGH (설계 문서의 상태 표가 곧 테스트 케이스가 되어 테스트가 문서와 따로 자라지 않게 합니다)**

Screen 절의 상태 표 한 줄이 integration 케이스 하나입니다. 테스트를 따로 생각해 내지 않고 문서에서 뽑습니다.
단계 표의 `Check`는 그 케이스를 고르는 명령입니다. 케이스 ID가 문서와 spec을 잇습니다.

| 문서의 자리 | 테스트의 자리 |
| --- | --- |
| 구역 절의 `State`, `Shows` 표 한 줄 | integration 케이스 하나. 제목은 케이스 ID, 상태, 보이는 것 순서 |
| 구역 절의 흐름도 갈래 | 그 케이스의 WHEN 한 줄 |
| `Data and API` 절의 endpoint | 케이스가 덮어쓰는 handler |
| 단계 표의 `Check` | `--grep`으로 그 단계의 케이스 ID를 고르는 명령 |
| 캡처 번호 | story의 구역 locator |

상태 낱말은 대기, 빈 결과, 오류, 성공 넷입니다. 문서와 테스트 제목이 같은 낱말을 씁니다.
구현 전에 케이스를 먼저 쓰면 `test.fixme`에 단계 번호를 적어 묶어 두고 그 단계의 `Done` 보고에서 풉니다.
수집 0건은 통과가 아닙니다. `Check` 명령은 `--list`로 케이스 수부터 확인합니다.
케이스 제목과 GIVEN, WHEN, THEN의 꼴은 `testing/case-describe-one-observable-behavior`가 정합니다.
story를 mount해 단언하는 법은 `testing/story-verify-states-through-consuming-tests`가 정합니다.

**Incorrect 1 (상태 표와 `Check`가 서로를 모르고 테스트가 문서와 따로 자랍니다):**

<<< ../examples/stage-derive-checks-from-state-tables/01-incorrect.markdown

**Correct 1 (상태 표의 줄마다 케이스 ID를 붙이고 `Check`가 그 ID를 고르며 spec이 같은 ID로 답합니다):**

<<< ../examples/stage-derive-checks-from-state-tables/02-correct-1.markdown [screen/orders.md]

<<< ../examples/stage-derive-checks-from-state-tables/02-correct-2.test.ts [test/orders/orders.integration.spec.ts]
