---
title: Declare Functions as Arrow Consts
titleKo: 함수는 `const` 화살표로 선언합니다
impact: MEDIUM
impactDescription: 함수 선언과 본문 형식을 통일해 변경 범위를 줄이고 선언 순서를 확인하기 쉽게 합니다
appliesWhen:
  - 이름을 지어 선언하는 함수를 새로 만들거나 선언이나 본문 형태를 바꿀 때
  - 객체 속성에 함수를 담거나 그 형태를 바꿀 때
  - `return`만 있는 `if`를 쓰거나 바꿀 때
  - 제외: 인라인 콜백이나 커링의 바깥 화살표인 경우
  - 제외: 클래스 메서드, 제너레이터, 오버로드 선언인 경우
reviewWith: functions-use-named-object-params-for-complex-signatures
tags: functions, declarations
---

## Declare Functions as Arrow Consts

**Impact: MEDIUM (함수 선언과 본문 형식을 통일해 변경 범위를 줄이고 선언 순서를 확인하기 쉽게 합니다)**

### 선언과 본문 형식

이름 붙인 함수는 `const` 화살표로 선언합니다.
객체에 담는 함수도 화살표로 씁니다.
본문이 값을 돌려주는 식 하나뿐이면 중괄호와 `return` 없이 식 본문으로 씁니다.
문장이 있으면 블록으로 열고 값을 반환할 때 `return`을 적습니다.
식 본문이 객체 리터럴이면 `({…})`처럼 괄호로 감쌉니다.

| 대상 | 선언, 본문 형식 |
| --- | --- |
| 이름 붙인 함수 | 식 하나면 `const name = (…) => 식`, 문장이 있으면 `const name = (…) => { … }` |
| 객체에 담긴 함수 | `name: (…) => 식`이나 `name: (…) => { … }`. 메서드 축약형은 쓰지 않습니다 |
| 일회성 인라인 콜백 | 같은 기준입니다. `rows.map((row) => row.id)` |
| 커링의 바깥 화살표 | `(id) => (event) => { … }`처럼 안쪽 함수만 블록으로 엽니다 |
| 클래스 메서드 | 메서드 문법을 유지하고 화살표 필드로 바꾸지 않습니다 |
| 제너레이터 | `function*` 문법을 씁니다 |
| 오버로드 | `function` 선언을 허용합니다. 호출 시그니처 타입을 `const`에 붙일 수 있으면 그쪽을 씁니다 |

### 분기 본문

본문이 `return` 한 문장뿐인 `if`는 중괄호 없이 한 줄로 씁니다.
분기마다 무엇을 돌려주는지 위에서 아래로 이어 읽힙니다.

| 분기 본문 | 형식 |
| --- | --- |
| `return 값;`이나 빈 `return;` 한 문장 | `if (조건) return 값;` 한 줄 |
| 문장이 둘 이상이거나 `return`이 아닌 문장 | 중괄호 블록 |

한 줄 `if`가 이어지면 빈 줄 없이 붙이고 마지막 `return` 앞에만 빈 줄을 둡니다.

### `this`를 쓰는 함수

**`this`를 쓰는 함수는 기계적으로 치환하지 않습니다.**
축약 메서드의 `this`는 호출 방식에 따라 달라집니다.
화살표는 선언된 바깥 스코프의 `this`를 사용합니다.
외부 콜백이 호출 시점의 `this`를 요구하면 계약을 유지하고 이유 주석을 남깁니다.

참고: [Airbnb JS 가이드: 함수 선언 대신 표현식](https://github.com/airbnb/javascript#functions--declarations),
[MDN: 화살표 함수와 this](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions).

**Incorrect 1 (이름 붙인 함수를 `function`으로 선언합니다):**

<<< ../examples/functions-declare-functions-as-arrow-consts/01-incorrect.ts

**Correct 1 (같은 함수를 `const` 화살표와 식 본문으로 선언합니다):**

<<< ../examples/functions-declare-functions-as-arrow-consts/02-correct.ts

**Incorrect 2 (객체 속성의 함수를 메서드 축약형으로 씁니다):**

<<< ../examples/functions-declare-functions-as-arrow-consts/03-incorrect.ts

**Correct 2 (객체 속성의 함수는 화살표, 인라인 콜백은 한 줄로 씁니다):**

<<< ../examples/functions-declare-functions-as-arrow-consts/04-correct.ts

**Incorrect 3 (`return` 한 문장뿐인 분기를 중괄호 블록으로 엽니다):**

<<< ../examples/functions-declare-functions-as-arrow-consts/06-incorrect.ts

**Correct 3 (`return` 한 문장뿐인 분기는 한 줄 `if`로 이어 씁니다):**

<<< ../examples/functions-declare-functions-as-arrow-consts/07-correct.ts

**Correct (클래스 메서드와 제너레이터는 그대로 둡니다):**

<<< ../examples/functions-declare-functions-as-arrow-consts/05-correct.ts
