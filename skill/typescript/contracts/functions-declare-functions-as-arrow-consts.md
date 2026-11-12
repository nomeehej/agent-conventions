# Declare Functions as Arrow Consts

**Impact: MEDIUM (함수 선언과 본문 형식을 통일해 변경 범위를 줄이고 선언 순서를 확인하기 쉽게 합니다)**

### 선언과 본문 형식

이름 붙인 함수는 `const` 화살표로 선언합니다.
객체에 담는 함수도 화살표로 씁니다.
본문은 블록으로 열고 값을 반환할 때 `return`을 적습니다.
반환값이 없으면 `return`을 생략합니다.

| 대상 | 선언, 본문 형식 |
| --- | --- |
| 이름 붙인 함수 | `const name = (…) => { … }` |
| 객체에 담긴 함수 | `name: (…) => { … }`. 메서드 축약형은 쓰지 않습니다 |
| 일회성 인라인 콜백 | `rows.map((row) => row.id)`처럼 표현식 본문을 허용합니다 |
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

```ts
// ----------------------------------------------------------------------------------------
// 제목 공백 정리, 검색어 비교에서 공백 차이 무시
//
// normalizeTitle("  초록   셔츠 ") → "초록 셔츠"
// normalizeTitle("초록\n셔츠") → "초록 셔츠"
// normalizeTitle("   ") → ""
// ----------------------------------------------------------------------------------------
export function normalizeTitle(rawTitle: string): string {
	return rawTitle.trim().replace(/\s+/g, " ");
}
```

**Correct 1 (같은 함수를 `const` 화살표와 블록 본문으로 선언합니다):**

```ts
// ----------------------------------------------------------------------------------------
// 제목 공백 정리, 검색어 비교에서 공백 차이 무시
//
// normalizeTitle("  초록   셔츠 ") → "초록 셔츠"
// normalizeTitle("초록\n셔츠") → "초록 셔츠"
// normalizeTitle("   ") → ""
// ----------------------------------------------------------------------------------------
export const normalizeTitle = (rawTitle: string): string => {
	return rawTitle.trim().replace(/\s+/g, " ");
};
```

> 나머지 예시와 예외는 [full rule](../rules/03-01-functions-declare-functions-as-arrow-consts.md)에 있습니다.
