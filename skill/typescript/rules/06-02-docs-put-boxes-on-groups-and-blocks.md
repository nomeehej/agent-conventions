---
title: Put Comment Boxes on Groups and Blocks
titleKo: 주석 상자는 선언마다 달지 않고 묶음과 블록 위에 둡니다
impact: MEDIUM
impactDescription: 주석이 코드보다 커지지 않고 설명이 필요한 자리에만 남습니다
appliesWhen:
  - 주석 상자를 추가, 옮기거나 지울 때
  - 공용 값 함수, 파일 위 상수 묶음, 긴 본문의 구획을 추가, 변경할 때
requiresSelected: docs-write-comments-about-purpose-and-constraints
tags: docs, comments, declarations
---

## Put Comment Boxes on Groups and Blocks

**Impact: MEDIUM (주석이 코드보다 커지지 않고 설명이 필요한 자리에만 남습니다)**

상자는 선언마다 달지 않고 여러 줄을 함께 설명하는 묶음과 블록 위에 둡니다.
선언 하나에는 상자 의무가 없고 이름과 코드에 없는 사실이 있을 때만 둡니다.
그 줄에만 해당하는 이유는 상자 대신 `//` 한 줄로 적습니다.
적을 것이 없으면 상자도 두지 않습니다.

| 자리 | 상자 |
| --- | --- |
| 선언 하나(바인딩, 핸들러, 이펙트, 내보낸 함수) | 의무가 없습니다. 설명할 것이 있을 때만 바로 위에 둡니다 |
| 공용 값 함수 | 함수 바로 위에 두고 제목, 필요한 본문, `호출 → 결과` 예시를 적습니다 |
| 파일 위 상수 묶음 | 묶음 바로 위에 하나만 둡니다. 상수마다 할 말이 있으면 상수 이름을 항목으로 두고 설명을 들여 씁니다 |
| 긴 본문의 구획 | 구획 첫 줄 바로 위에 두고 제목만 두는 것을 기본으로 씁니다. `docs-keep-body-comments-for-intent-and-steps`가 정합니다 |
| 커스텀 `type`, `interface` | `types-document-custom-types-and-shapes`가 정합니다 |
| 코드 줄 사이 | 상자를 두지 않습니다. 그 줄만의 이유와 도구 지시를 `//` 한 줄로 적습니다 |

컴포넌트 본문의 상자 자리는 프레임워크 규칙이 더 정합니다.
상자 모양과 문장은 `docs-write-comments-about-purpose-and-constraints`가 정합니다.

### 공용 값 함수의 예시

공용 값 함수는 입력으로 값을 만드는 포매터, 파서, 변환 함수 가운데 여러 곳이 부르는 함수입니다.
루트 `util`의 함수와 대표 둘 이상이 부르는 `_function` 보조가 해당합니다.
상자의 마지막 덩어리에 `호출 → 결과`를 2~4줄 적고 하나 이상은 0, 빈 값, 마감 시각 같은 경계값으로 고릅니다.
예시 값은 그 함수의 단위 테스트에도 같은 값으로 둡니다.
구현이 바뀌어 예시가 틀리면 테스트가 먼저 실패합니다.

참고: [Go 블로그: 테스트로 실행되는 예시](https://go.dev/blog/examples),
[rustdoc: 문서 테스트](https://doc.rust-lang.org/rustdoc/write-documentation/documentation-tests.html).

**Incorrect 1 (이름과 코드가 말하는 내용을 선언 위 상자에 다시 적습니다):**

<<< ../examples/docs-put-boxes-on-groups-and-blocks/01-incorrect.ts

**Correct 1 (적을 것이 없는 선언에는 상자를 두지 않습니다):**

<<< ../examples/docs-put-boxes-on-groups-and-blocks/02-correct.ts

**Incorrect 2 (파일 위 상수마다 상자를 따로 붙입니다):**

<<< ../examples/docs-put-boxes-on-groups-and-blocks/03-incorrect.ts

**Correct 2 (상수 묶음 위 상자 하나에 상수마다 항목을 둡니다):**

<<< ../examples/docs-put-boxes-on-groups-and-blocks/04-correct.ts

**Incorrect 3 (공용 값 함수의 상자에 제목만 있어 반올림과 빈 값의 결과가 보이지 않습니다):**

<<< ../examples/docs-put-boxes-on-groups-and-blocks/05-incorrect.ts

**Correct 3 (제목 뒤에 경계값을 포함한 `호출 → 결과` 예시를 두고 단위 테스트에도 같은 값을 둡니다):**

<<< ../examples/docs-put-boxes-on-groups-and-blocks/06-correct-1.ts

<<< ../examples/docs-put-boxes-on-groups-and-blocks/06-correct-2.test.ts
