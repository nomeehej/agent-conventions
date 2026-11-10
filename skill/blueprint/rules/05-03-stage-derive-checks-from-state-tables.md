---
title: Derive Checks from State Tables
titleKo: 검사는 상태 표에서 뽑습니다
impact: HIGH
impactDescription: 설계 문서의 상태 표와 시나리오 표가 곧 테스트 케이스가 되어 테스트가 문서와 따로 자라지 않게 합니다
appliesWhen:
  - 설계 문서의 상태 표나 흐름도에서 테스트 케이스나 story를 뽑을 때
  - 화면 문서의 Scenarios 표를 쓰거나 고칠 때
  - Plan 표의 `Check` 칸을 케이스 ID로 채울 때
requiresSelected: testing/case-describe-one-observable-behavior, testing/story-verify-states-through-consuming-tests
tags: stage, check, testing, story, scenario
---

## Derive Checks from State Tables

**Impact: HIGH (설계 문서의 상태 표와 시나리오 표가 곧 테스트 케이스가 되어 테스트가 문서와 따로 자라지 않게 합니다)**

완료 기준은 구현 전에 화면 문서에 시나리오로 적습니다.
테스트를 따로 생각해 내지 않고 문서의 표에서 뽑고, 시나리오 ID가 문서와 테스트를 잇습니다.

| 문서의 자리 | 담는 것 | 테스트의 자리 |
| --- | --- | --- |
| `Loading, empty and errors` | 구역마다 대기, 빈 값, 실패와 `Check` 칸의 ID 링크 | 그 상태를 덮는 케이스 |
| `Mock`의 경우 표 | `Case`, `API`, `Override`, `Check` | 케이스가 덮어쓰는 handler |
| 구역 절의 흐름도 갈래 | 조작 하나 | 케이스의 WHEN 한 줄 |
| `Scenarios` 표 한 줄 | `ID`, `Region`, `Scenario`, `Tag`, `Layer` | 케이스 하나. 제목 `[ID] 문장` |
| Plan 표의 `Check` | 그 단계의 케이스를 고르는 명령 | `--grep` |

`Scenarios`는 `::part[Check]` 아래 테스트 파일마다 표 하나입니다. 표 안은 구역 순서로 둡니다.

| 칸 | 쓰는 법 |
| --- | --- |
| `ID` | `<a id="test-ord-012"></a>ORD-012`. 다른 표와 본문은 번호 글자에 `#test-ord-012` 주소로 가리킴. ID는 바꾸지 않음 |
| `Region` | 그 규칙을 적은 절. 대기와 오류 경계는 `Loading, empty and errors`, 빈 값은 보이는 구역, 조회 인자는 `Data and API` |
| `Scenario` | 테스트 제목의 문장 그대로 |
| `Tag` | 우선순위 `high`, `mid`, `low` 하나. 빈 값과 실패는 `negative`, 그림 비교는 `visual`을 `<br>`로 덧붙임 |
| `Layer` | `integration` = story에 mount, `e2e` = 앱 진입이나 화면 사이 이동 |

상태 낱말은 대기, 빈 값, 실패, 성공입니다. 문서와 테스트 제목이 같은 낱말을 씁니다.
구현 전에 케이스를 먼저 쓰면 `test.fixme`에 Plan 단계 번호를 적어 묶어 두고 그 단계의 `Done` 보고에서 풉니다.
수집 0건은 통과가 아닙니다. `Check` 명령은 `--list`로 케이스 수부터 확인합니다.
문서와 테스트의 ID, 문장, 태그, 층, 끊긴 `#test-` 링크는 `check-scenarios.mjs`로 대조합니다.
케이스 제목과 GIVEN, WHEN, THEN의 꼴은 `testing/case-describe-one-observable-behavior`가 정합니다.
story를 mount해 단언하는 법은 `testing/story-verify-states-through-consuming-tests`가 정합니다.

**Incorrect 1 (상태 표와 `Check`가 서로를 모르고 테스트가 문서와 따로 자랍니다):**

<<< ../examples/stage-derive-checks-from-state-tables/01-incorrect.markdown

**Correct 1 (상태 표와 경우 표가 시나리오 ID를 가리키고 Scenarios 표가 테스트 제목과 같은 문장을 씁니다):**

<<< ../examples/stage-derive-checks-from-state-tables/02-correct-1.markdown [screen/orders.md]

<<< ../examples/stage-derive-checks-from-state-tables/02-correct-2.test.ts [test/1-orders/1.1-orders.integration.spec.ts]

**Correct (문서의 Scenarios 표와 테스트 제목을 대조합니다. 프로젝트의 `script/blueprint/`에 복사합니다):**

<<< ../examples/stage-derive-checks-from-state-tables/03-correct.mjs
