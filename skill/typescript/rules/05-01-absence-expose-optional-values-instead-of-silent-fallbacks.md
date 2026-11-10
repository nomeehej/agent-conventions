---
title: Expose Optional Values Instead of Silent Fallbacks
titleKo: `??`, `||`, 기본 매개변수 자리에 리터럴을 적지 않습니다
impact: CRITICAL
impactDescription: 기본값의 출처를 이름으로 드러내고 누락된 데이터의 처리 기준을 유지합니다
appliesWhen:
  - 선택 값을 읽거나 정규화하거나 넘기는 방식을 바꿀 때
  - `??`, `||`, 기본값, 빈 값 대체 분기를 추가, 변경할 때
reviewWith: >-
  absence-resolve-defaults-at-the-boundary,
  naming-place-project-constants-in-the-root-constant-folder,
  naming-place-owner-constants-in-the-owner-constant-folder
tags: absence
---

## Expose Optional Values Instead of Silent Fallbacks

**Impact: CRITICAL (기본값의 출처를 이름으로 드러내고 누락된 데이터의 처리 기준을 유지합니다)**

### 기본값 표현

`??`, `||` 오른쪽과 기본값 자리에서는 리터럴 대신 이미 선언된 이름을 참조합니다.
이름은 한 파일만 쓰면 그 파일 위쪽에, 여러 파일이 쓰면 `constant`나 소유자의 `_constant`에 선언합니다.
이유 주석을 붙이기만 해서는 규칙을 충족하지 못합니다.

| 기본값 표현 | 판정 |
| --- | --- |
| `?? "help@example.com"`, `?? 0`, `?? []`, `\|\| "-"` | 위반 |
| `?? pagination_default_page_size`처럼 선언된 상수 | 통과 |
| 읽기만 하는 소비처에 `?? empty_product_rows`처럼 `readonly` 타입으로 선언한 빈 배열, 빈 객체 상수 | 통과 |
| `?? undefined`로 `null`을 `undefined`로 바꾸는 계약 변환 | 통과 |
| 함수 안 `const fallback = "-"`처럼 주제 접두사 없는 지역 이름으로 리터럴만 옮김 | 위반 |
| 선언된 이름 둘을 합성한 파생값 | 통과 |
| `(size = 10) =>`, `{size = 10}` 같은 기본값 리터럴 | 위반 |
| `(size = pagination_default_page_size) =>` | 통과 |
| 삼항의 대체 리터럴 `value ? value : "-"`, `String(value ?? "")` | 위반 |

### 없음으로 취급할 값

| 대체하려는 값 | 연산자 |
| --- | --- |
| `null`, `undefined`만 없음으로 취급 | `??` |
| `0`, `false`, 빈 문자열까지 없음으로 취급하는 계약 | `\|\|` |

선언된 이름이어도 기본값의 의미가 맞아야 합니다.
`0`, `false`가 유효하면 `??`를 씁니다.
소비처가 `readonly`를 받지 못하면 빈 배열 상수를 쓰지 않고 경계에서 채웁니다.
채우는 위치는 `absence-resolve-defaults-at-the-boundary`가 정합니다.

참고: [MDN: ?? 연산자](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing).

**Incorrect 1 (`??`, `||`, 기본 매개변수 자리에 리터럴을 적습니다):**

<<< ../examples/absence-expose-optional-values-instead-of-silent-fallbacks/01-incorrect.ts

**Correct 1 (이미 선언된 이름만 가리킵니다):**

<<< ../examples/absence-expose-optional-values-instead-of-silent-fallbacks/02-correct.ts
