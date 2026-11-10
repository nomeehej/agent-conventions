# Declare Meaningful Numbers Instead of Writing Them Inline

**Impact: MEDIUM (숫자의 의미를 이름으로 드러내고 한곳에서 변경할 수 있습니다)**

제품 정책처럼 뜻이 있는 숫자는 상수로 선언하고 사용처에서는 그 이름을 참조합니다.
한 파일만 쓰는 숫자는 그 파일 위쪽에 `snake_case` 주제 접두사 이름으로 선언합니다.
다른 파일도 쓰게 되면 소유자를 지워도 남는 숫자는 루트 `constant`에 둡니다.
소유자와 함께 사라지는 숫자는 소유자의 `_constant`에 둡니다.

| 숫자의 용도 | 처리 |
| --- | --- |
| 재시도 횟수 `3`, 페이지 크기 `20` 등 제품 정책 | 작거나 흔한 숫자여도 상수로 선언합니다 |
| 일반 연산의 `0`, `1`, `2`, 단위 변환의 `10`, `24`, `60` | 그대로 적습니다 |
| 그 밖의 단위 변환 `1000`, `100` | `time_ms_per_second`처럼 이름 상수로 선언합니다 |
| 배열 인덱스, 선언 초기값, 상수 선언 자신의 값 | 그대로 적습니다 |
| 테스트의 표본값, 경계값, 기대값 | 직접 적습니다. 기대값을 제품 정책 상수에서 가져와 함께 바뀌게 하지 않습니다 |
| `??`, `\|\|` 오른쪽이나 기본 매개변수 | `absence-expose-optional-values-instead-of-silent-fallbacks`를 따릅니다 |
| 여러 숫자가 한 뜻을 이룸 | 배열 대신 `{first: 0x1100, last: 0x115f}`처럼 이름 있는 객체 필드로 둡니다 |

배치는 `naming-place-project-constants-in-the-root-constant-folder`가 정합니다.

**Incorrect 1 (뜻이 있는 숫자를 쓰는 자리에 그대로 적습니다):**

```ts
// page/products/products-page.tsx
const responseProductListSuspense = useSuspenseQuery({...productListQueryOptions(), retry: 42});
```

**Correct 1 (한 파일만 쓰는 숫자는 그 파일 위쪽에 선언하고 쓰는 자리에서 이름을 가리킵니다):**

```ts
// page/products/products-page.tsx

// ----------------------------------------------------------------------------------------
// 이 횟수를 넘으면 사용자에게 실패 표시
// ----------------------------------------------------------------------------------------
const retry_max_attempts = 42;

const responseProductListSuspense = useSuspenseQuery({...productListQueryOptions(), retry: retry_max_attempts});
```

> 나머지 예시와 예외는 [full rule](../rules/04-04-values-declare-meaningful-numbers.md)에 있습니다.
