# Use Set and Map for Repeated Lookups

**Impact: MEDIUM (반복 조회 구조를 한 번 만들어 목록 전체를 되풀이해 비교하는 비용을 줄입니다)**

### 반복 조회 바꾸기

같은 목록을 반복 조회하면 루프 밖에서 `Set`이나 `Map`을 한 번 만들고 원본 목록이 바뀌면 다시 만듭니다.

| 상황 | 처리 |
| --- | --- |
| 같은 목록을 루프나 `map`, `filter`, `some` 콜백 안에서 조회 | 포함 여부는 `Set.has`, 항목 조회는 `Map.get`으로 바꿉니다 |
| 위 조건에 해당하지 않거나 콜백 안이어도 소스에 적힌 상수 목록이 한눈에 읽히는 길이 | 기존 조회를 유지합니다 |
| 중복 제거, 차집합처럼 결과 목록을 만듦 | `uniq`, `difference`, `without`을 씁니다. 만든 뒤 `has`를 반복 호출할 때만 `Set`을 남깁니다 |

### `Map`으로 바꾸기 전 확인

| `Map`으로 바꾸기 전 확인 | 이유와 처리 |
| --- | --- |
| `keyBy`의 객체를 조회용으로 쓰는지 | 프로토타입의 `constructor`, `toString` 키에 걸릴 수 있어 `Map`을 씁니다 |
| 없는 키를 타입이 드러내는지 | `noUncheckedIndexedAccess`가 꺼진 `Record<string, T>`와 달리 `Map.get()`은 항상 `T \| undefined`입니다 |
| 키가 중복되는지 | `find`는 첫 항목, `new Map(entries)`는 마지막 항목을 남깁니다. 첫 항목을 유지하려면 `uniqBy`를 먼저 적용합니다 |

`groupBy`는 목록을 묶어 재구성할 때 씁니다.
`keyBy`는 결과 객체를 조회가 아니라 직렬화나 `Record` 입력으로 쓸 때만 씁니다.
조회용 색인은 `Map`입니다.
`Map.get()`의 없음은 `absence-expose-optional-values-instead-of-silent-fallbacks`에 따라 조회한 자리에서 채웁니다.
목록 연산의 선택은 `values-use-es-toolkit-for-value-helpers`가 정합니다.

참고: [MDN: Set 객체](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set),
[MDN: Map 객체](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map).

**Incorrect 1 (같은 배열을 반복 순회하며 포함 여부를 확인합니다):**

```ts
const visibleProducts = products.filter((product) => allowedProductIds.includes(product.id));
const disabledProducts = archivedProducts.filter((product) => allowedProductIds.includes(product.id));
```

**Correct 1 (반복 조회는 `Set`으로 처리합니다):**

```ts
const allowedProductIdSet = new Set(allowedProductIds);

const visibleProducts = products.filter((product) => allowedProductIdSet.has(product.id));
const disabledProducts = archivedProducts.filter((product) => allowedProductIdSet.has(product.id));
```

> 나머지 예시와 예외는 [full rule](../rules/04-02-values-use-set-and-map-for-repeated-lookups.md)에 있습니다.
