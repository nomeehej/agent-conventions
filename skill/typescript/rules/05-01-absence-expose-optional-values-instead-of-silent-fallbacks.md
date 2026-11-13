---
title: Expose Optional Values Instead of Silent Fallbacks
titleKo: 없음은 빈 값이나 선언된 이름으로 한 번만 채웁니다
impact: CRITICAL
impactDescription: 없는 데이터가 실제 값처럼 보이지 않고 기본값의 출처가 이름으로 남습니다
appliesWhen:
  - 선택 값을 읽거나 정규화하거나 넘기는 방식을 바꿀 때
  - `??`, `||`, 기본값, 빈 값 대체 분기를 추가, 변경할 때
reviewWith: >-
  absence-resolve-defaults-at-the-boundary, absence-check-once-at-the-boundary,
  naming-place-project-constants-in-the-root-constant-folder,
  naming-place-owner-constants-in-the-owner-constant-folder
tags: absence
---

## Expose Optional Values Instead of Silent Fallbacks

**Impact: CRITICAL (없는 데이터가 실제 값처럼 보이지 않고 기본값의 출처가 이름으로 남습니다)**

### 채우는 값

없음을 채우는 값은 빈 값이거나 선언된 이름입니다.
그 밖의 값으로는 채우지 않고 없음을 타입에 남깁니다.

| 채우는 값 | 예 | 처리 |
| --- | --- | --- |
| 빈 값 | 처음 보는 키의 개수 `?? 0`, 범위 밖 줄 `?? ""`, 없는 목록 `?? []` | 리터럴로 적습니다 |
| 제품이 정한 기본값 | 페이지 크기, 문의 메일, 빈 값 표시 문자 | 선언된 이름을 참조합니다 |
| 사실이 아닌 값 | 응답에 없는 변화율의 `?? 0`, 없는 이름의 `?? ""` | 채우지 않습니다. `absence-check-once-at-the-boundary`에 따라 렌더하는 자리에서 한 번 분기합니다 |

빈 값은 `0`, `""`, `[]`이고 없을 때도 그 값이 사실이어야 합니다.
처음 보는 키의 개수는 0이지만 응답에 없는 변화율은 0%가 아닙니다.
`0`과 `""`는 화면에 실제 값처럼 보이므로 `Map.get`, 인덱스 접근, `at`, `find` 같은 조회 바로 뒤에만 적습니다.
빈 목록은 화면에 아무것도 보이지 않으므로 필드와 프롭 뒤에도 적습니다.

### 기본값 표현

선언된 이름은 한 파일만 쓰면 그 파일 위쪽에, 여러 파일이 쓰면 `constant`나 소유자의 `_constant`에 둡니다.
이유 주석을 붙이기만 해서는 규칙을 충족하지 못합니다.

| 기본값 표현 | 판정 |
| --- | --- |
| `orderCountByStatus.get(status) ?? 0`, `lines[index] ?? ""`처럼 조회 바로 뒤의 `0`, `""` | 통과 |
| `response.rows ?? []`, `props.tags ?? []` 같은 빈 목록 | 통과 |
| `summary.changeRate ?? 0`, `user.nickname ?? ""`처럼 필드, 프롭 뒤의 `0`, `""` | 위반 |
| `?? "help@example.com"`, `?? 10`, `\|\| "-"` | 위반 |
| `?? pagination_default_page_size`처럼 선언된 상수 | 통과 |
| 프롭으로 넘겨 참조가 같아야 하는 자리에 `?? empty_product_rows`처럼 `readonly` 타입으로 선언한 빈 배열, 빈 객체 상수 | 통과 |
| `?? undefined`로 `null`을 `undefined`로 바꾸는 계약 변환 | 통과 |
| 함수 안 `const fallback = "-"`처럼 주제 접두사 없는 지역 이름으로 리터럴만 옮김 | 위반 |
| 선언된 이름 둘을 합성한 파생값 | 통과 |
| `(size = 10) =>`, `{size = 10}` 같은 기본값 리터럴 | 위반 |
| `(size = pagination_default_page_size) =>` | 통과 |
| 삼항의 대체 리터럴 `value ? value : "-"`, `String(value ?? "")` | 위반 |

### 한 값에 한 번

한 값의 없음은 한 번만 채웁니다.

| 모양 | 처리 |
| --- | --- |
| `a ?? b ?? c`처럼 대체가 이어짐 | 후보에서 하나를 고르는 판단입니다. `choose`로 시작하는 함수의 `return` 분기로 적습니다 |
| 삼항의 가지 안에 `??`, `\|\|` | 경계에서 먼저 채우고 삼항에는 채워진 값만 둡니다 |
| 같은 값에 같은 대체를 여러 자리에서 반복 | `absence-resolve-defaults-at-the-boundary`에 따라 경계에서 한 번 채웁니다 |

### 없음으로 취급할 값

| 대체하려는 값 | 연산자 |
| --- | --- |
| `null`, `undefined`만 없음으로 취급 | `??` |
| `0`, `false`, 빈 문자열까지 없음으로 취급하는 계약 | `\|\|` |

선언된 이름이어도 기본값의 의미가 맞아야 합니다.
`0`, `false`가 유효하면 `??`를 씁니다.
소비처가 `readonly`를 받지 못하면 빈 배열 상수를 쓰지 않고 경계에서 `[]`로 채웁니다.
채우는 위치는 `absence-resolve-defaults-at-the-boundary`가 정합니다.

참고: [MDN: ?? 연산자](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing),
[Rust 문서: 해시 맵 조회의 `unwrap_or(0)`, `or_insert(0)`](https://doc.rust-lang.org/book/ch08-03-hash-maps.html),
[MDN: `Map.getOrInsert()`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Map/getOrInsert).

**Incorrect 1 (`??`, `||`, 기본 매개변수 자리에 제품이 정한 값을 리터럴로 적습니다):**

<<< ../examples/absence-expose-optional-values-instead-of-silent-fallbacks/01-incorrect.ts

**Correct 1 (이미 선언된 이름만 가리킵니다):**

<<< ../examples/absence-expose-optional-values-instead-of-silent-fallbacks/02-correct.ts

**Incorrect 2 (사실이 아닌 값으로 없음을 덮습니다):**

<<< ../examples/absence-expose-optional-values-instead-of-silent-fallbacks/03-incorrect.ts

**Correct 2 (없음을 남기고 보이는 자리에서 한 번 가릅니다):**

<<< ../examples/absence-expose-optional-values-instead-of-silent-fallbacks/04-correct.ts

**Incorrect 3 (대체를 이어 붙여 후보 셋에서 고릅니다):**

<<< ../examples/absence-expose-optional-values-instead-of-silent-fallbacks/05-incorrect.ts

**Correct 3 (고르는 판단은 `return` 분기로 적습니다):**

<<< ../examples/absence-expose-optional-values-instead-of-silent-fallbacks/06-correct.ts

**Correct (조회가 만든 없음은 조회 바로 뒤에서 `0`으로 채웁니다):**

<<< ../examples/absence-expose-optional-values-instead-of-silent-fallbacks/07-correct.ts
