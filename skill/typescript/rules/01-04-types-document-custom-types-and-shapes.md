---
title: Document Custom Types and Declarative Shapes
titleKo: 커스텀 타입과 선언형 형태에는 이름과 타입에 없는 사실만 상자로 적습니다
impact: MEDIUM
impactDescription: 구현을 읽기 전에 도메인 전용 계약을 이해할 수 있습니다
appliesWhen:
  - 타입, `interface`, 스키마 최상단, 객체 상수, 계약 필드, 파생 별칭을 추가, 변경할 때
  - 이름 붙인 형태에 호출 계약 역할을 새로 얹을 때
  - 제외: 외부, 생성된, 읽기 전용, 공용 형태를 그대로 쓰거나 반환 타입이 익명으로 추론되는 경우
requiresSelected: docs-write-comments-about-purpose-and-constraints
tags: types, comments
---

## Document Custom Types and Declarative Shapes

**Impact: MEDIUM (구현을 읽기 전에 도메인 전용 계약을 이해할 수 있습니다)**

### 직접 선언한 형태

직접 선언한 타입과 형태에 이름과 타입이 말하지 않는 사실이 있으면 바로 위 상자에 적습니다.
단위, 형식, 범위, 출처, 빈 값의 뜻이 그런 사실이고 적을 것이 없으면 상자를 두지 않습니다.
필드마다 할 말이 있으면 그 상자에 필드 이름을 항목으로 두고 설명을 들여 쓰며 본문 안 필드에는 주석을 달지 않습니다.
항목 모양은 `docs-write-comments-about-purpose-and-constraints`를 따릅니다.
주석 내용은 `docs-write-comments-about-purpose-and-constraints`의 한국어 기준을 따릅니다.

| 선언 | 상자 |
| --- | --- |
| 커스텀 `type`, `interface`, 스키마 최상단 | 이름과 타입에 없는 목적, 제약이 있을 때 둡니다. 항목에는 그런 사실이 있는 필드만 적고 원본에서 가져온 필드도 같습니다 |
| 객체형 상수 | 값의 출처처럼 키 이름에 없는 사실이 있을 때 둡니다. 키는 항목으로 적지 않고 `constant` 폴더와 `enum` 성격 상수 객체도 같습니다 |
| 인덱스 접근 별칭, `Omit` 결과 | 선언한 필드가 없어 항목을 적지 않습니다 |

### 기존 형태를 쓸 때

| 기존 형태를 쓰는 방식 | 문서화 범위 |
| --- | --- |
| 새 입력, 출력 계약 역할을 맡았고 기존 주석이 그 역할과 어긋나지 않음 | 선언은 고치지 않습니다. 새 역할에 적을 사실이 있으면 그 역할을 맡은 함수 위 상자에 적습니다 |
| 새 입력, 출력 계약 역할을 맡았고 기존 주석이 다른 역할 하나만 말함 | 기존 선언의 상자와 항목을 새 역할까지 말하도록 고칩니다 |
| 외부, 생성된, 읽기 전용, 공용 형태를 그대로 씀 | 선언을 고치거나 문서화용 지역 별칭을 만들지 않습니다 |
| 이름 없이 구현에서 추론되는 익명 객체 | 대상이 아닙니다. `select`의 익명 반환값도 그대로 둡니다 |

참고: [Google TS: 정보를 더하는 주석](https://google.github.io/styleguide/tsguide.html#redundant-comments).

**Incorrect 1 (필드 설명을 본문 안 필드 위에 답니다):**

<<< ../examples/types-document-custom-types-and-shapes/01-incorrect.ts

**Correct 1 (필드 설명은 타입 위 상자의 항목에 적습니다):**

<<< ../examples/types-document-custom-types-and-shapes/02-correct.ts

**Incorrect 2 (필드 이름을 옮겨 적기만 한 상자를 둡니다):**

<<< ../examples/types-document-custom-types-and-shapes/03-incorrect.ts

**Correct 2 (이름과 타입에 없는 사실이 없으면 상자를 두지 않습니다):**

<<< ../examples/types-document-custom-types-and-shapes/04-correct.ts

**Correct (객체형 상수는 키 이름에 없는 사실만 본문에 적고 키는 항목으로 적지 않습니다):**

<<< ../examples/types-document-custom-types-and-shapes/05-correct.ts
