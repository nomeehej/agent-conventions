---
title: Name Functions by What Comes Out
titleKo: 함수 이름은 결과나 효과가 드러나게 짓습니다
impact: MEDIUM
impactDescription: 함수 이름으로 반환값이나 효과를 파악할 수 있습니다
appliesWhen:
  - 이름을 붙인 함수를 새로 만들거나 이름을 바꿀 때
  - 제외: 생성기, 프레임워크, 외부 계약이 정한 이름을 그대로 쓰는 경우
tags: functions, naming
---

## Name Functions by What Comes Out

**Impact: MEDIUM (함수 이름으로 반환값이나 효과를 파악할 수 있습니다)**

### 역할별 동사

함수 이름은 호출 뒤 얻는 값이나 효과를 구체적으로 드러냅니다.
첫 동사는 결과가 입력에서 어떻게 나왔는지를 말하고 한 역할에는 동사 하나만 씁니다.
입력은 시그니처가 설명하므로 이름에 반복하지 않습니다.

| 반환값의 역할 | 동사 | 예 |
| --- | --- | --- |
| 값이나 항목 하나에 일대일로 대응하는 다른 표현. 단위, 타입, 응답 항목의 행, 닫힌 집합의 분류 | `to` | `toOrderRows`, `toStatusTone` |
| 여러 필드나 설정을 모아 조립한 요청, 옵션, 화면 모델 | `build` | `buildUserSaveRequest` |
| 호출하는 함수, 상태를 가진 인스턴스 | `create` | `createMockRoute` |
| 합계, 차이, 범위 같은 수치 | `calculate`, 개수는 `count` | `calculateOrderTotal` |
| 값을 넣어 만든 표시 문자열 | `format` | `formatCandidateDayCount` |
| 같은 목록에서 조건에 맞는 항목만 남긴 목록 | `filter` | `filterActiveUsers` |
| 같은 목록의 순서만 바꾼 목록 | `sort` | `sortProducts` |
| 키로 묶은 목록 | `group` | `groupOrdersByStatus` |
| 이미 존재하는 값 | `get` | `getSelectedRow` |
| 값 하나 또는 없음 | `find` | `findUserByEmail` |
| 서로 다른 입력 둘 이상의 우선순위 선택 | `choose` | `chooseBackSource` |
| 같은 개념의 허용 범위, 표현 보정 | `normalize` | `normalizePageSize` |
| 문자열, `unknown` 검증 후 읽기 | `parse` | `parseSearchParams` |
| 두 값의 정렬 순서 | `compare` | `compareProductsByPrice` |
| 비동기 I/O, 여러 요청 조율 | `load`, `fetch` | `loadProductExport` |
| 참, 거짓 판정 | `is`, `has`, `can`, `should` | `shouldShowSummary` |

| 헷갈리는 짝 | 가르는 기준 |
| --- | --- |
| `to`와 `build` | 입력 하나나 항목 하나가 결과 하나에 대응하면 `to`, 여러 필드를 모아 입력에 없던 구조를 만들면 `build` |
| `to`와 `format` | 닫힌 집합에서 문구를 고르면 `to`, 값을 넣어 문자열을 만들면 `format` |
| `build`와 `create` | 평범한 데이터를 돌려주면 `build`, 호출하거나 상태를 가진 것을 돌려주면 `create` |
| `get`과 `calculate` | 있는 값을 꺼내기만 하면 `get`, 계산해서 만들면 `calculate` |
| `sort`, `filter`와 원본 변경 | 둘 다 새 목록을 돌려줍니다. 원본을 바꾸는 함수는 `values-prefer-immutable-array-sorting`에 따라 만들지 않습니다 |

| 함수의 역할 | 동사 | 예 |
| --- | --- | --- |
| 저장, 삭제 | `save`, `remove` | `saveProduct` |
| 조건 위반 시 예외 | `assert` | `assertLoggedIn` |
| 검사 결과 또는 오류 | `validate` | `validateProductForm` |
| 도메인 동작 | 실제 업무 동사 | `submitOrder`, `cancelBooking` |

소유자 경로가 이미 드러내는 도메인은 이름에서 뺍니다.
반환 타입 이름보다 호출부가 쓰는 결과 개념을 적습니다.
`buildOrderSummaryContent`보다 `buildOrderSummary`가 그 예입니다.
요청 계약 자체가 출력이면 `buildUserSaveRequest`처럼 짓습니다.

### 쓰지 않는 동사

같은 역할에 동사를 둘 두지 않고 결과를 말하지 않는 동사는 첫 동사로 쓰지 않습니다.
아래 동사는 직접 짓는 이름에서 표의 동사로 바꿉니다.

| 쓰지 않는 동사 | 바꿔 쓰는 동사 |
| --- | --- |
| `make` | 뜻이 같은 `create`나 `build` |
| `map` | 항목마다 옮긴 결과인 `to` |
| `update` | 저장이면 `save`, 값을 계산하면 결과의 동사 |
| `resolve` | 출처를 고르면 `choose`, 아니면 결과의 동사 |
| `process`, `manage`, `do`, `perform`, `execute` | 결과나 효과를 말하는 동사 |

| 모호한 이름 | 결과, 효과를 드러낸 이름 |
| --- | --- |
| `makeUserData` | 요청을 조립하면 `buildUserSaveRequest` |
| `mapProductRows` | 출력이 행이면 `toProductRows` |
| `processUserRows` | 남기는 목록이면 `filterActiveUsers` |
| `updateProduct` | 저장이면 `saveProduct`, 계산이면 `toUpdatedProduct` |
| `resolveStatusTone` | 분류 결과인 `toStatusTone` |
| `getOrderTotal` | 합계를 계산하면 `calculateOrderTotal` |

### 대상이 아닌 이름

`array.map(...)` 같은 표준 메서드 호출과 `Promise`의 `resolve`, `reject`는 대상이 아닙니다.
생성기, 프레임워크, 외부 계약이 정한 이름은 바꾸거나 감싸지 않습니다.
`handle`, `use`는 프레임워크 규칙을 따릅니다.

참고: [Rust API 가이드: 변환 함수 접두사 to_](https://rust-lang.github.io/api-guidelines/naming.html#c-conv),
[Effective Dart: 값을 돌려주는 함수와 `to___()`의 이름](https://dart.dev/effective-dart/design#names),
[Kotlin 코딩 규칙: 함수 이름은 동사](https://kotlinlang.org/docs/coding-conventions.html#choose-good-names),
[Swift API 가이드: 불필요한 낱말 빼기](https://www.swift.org/documentation/api-design-guidelines/#omit-needless-words),
[Google JavaScript 가이드: 메서드 이름은 동사구](https://google.github.io/styleguide/jsguide.html#naming-method-names),
[Google TypeScript 가이드: 타입 정보는 이름에서 빼기](https://google.github.io/styleguide/tsguide.html#naming-style),
[es-toolkit 문서: 새 배열을 돌려주는 `sortBy`](https://es-toolkit.dev/reference/array/sortBy.html),
[MDN: `Object.groupBy()`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object/groupBy),
[React 문서: 컨텍스트 객체를 만드는 `createContext`](https://react.dev/reference/react/createContext),
[naming-cheatsheet: 동작과 문맥, `is`, `has`, `should`](https://github.com/kettanaito/naming-cheatsheet).

**Incorrect 1 (입력, 구현 동작, 결과를 말하지 않는 동사를 이름에 씁니다):**

<<< ../examples/functions-name-functions-by-what-comes-out/01-incorrect-1.ts

<<< ../examples/functions-name-functions-by-what-comes-out/01-incorrect-2.ts

<<< ../examples/functions-name-functions-by-what-comes-out/01-incorrect-3.ts

<<< ../examples/functions-name-functions-by-what-comes-out/01-incorrect-4.ts

<<< ../examples/functions-name-functions-by-what-comes-out/01-incorrect-5.ts

**Correct 1 (결과의 역할에 맞는 동사와 출력 이름을 씁니다):**

<<< ../examples/functions-name-functions-by-what-comes-out/02-correct-1.ts

<<< ../examples/functions-name-functions-by-what-comes-out/02-correct-2.ts

<<< ../examples/functions-name-functions-by-what-comes-out/02-correct-3.ts

<<< ../examples/functions-name-functions-by-what-comes-out/02-correct-4.ts

<<< ../examples/functions-name-functions-by-what-comes-out/02-correct-5.ts

**Correct (저장, 검사 함수는 역할과 판정으로 이름을 짓습니다):**

<<< ../examples/functions-name-functions-by-what-comes-out/03-correct-1.ts

<<< ../examples/functions-name-functions-by-what-comes-out/03-correct-2.ts
