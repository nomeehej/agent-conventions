# Name Query and Mutation Bindings Consistently

**Impact: MEDIUM (지역 바인딩 이름으로 생성된 API 훅을 쉽게 찾을 수 있습니다)**

쿼리와 뮤테이션의 지역 바인딩 이름은 생성된 훅 이름에서 만듭니다.
TanStack Query 문서의 `query`, `mutation` 같은 이름은 어느 API의 훅인지 알려 주지 않아 생성된 훅을 찾을 수 없습니다.

| 바인딩 | 이름 |
| --- | --- |
| 생성된 단일 API 훅 | 조회 훅은 `use`를, 이름 맨 앞에 `Get`이 오면 `useGet`까지를 `response`로 바꿉니다. 뮤테이션 훅은 `use`만 `mutation`으로 바꿉니다. 나머지 낱말은 모두 유지하며 이름 중간의 `Get`도 그대로 둡니다 |
| 여러 쿼리를 합친 바인딩 | `response` 뒤에 결과 이름을 씁니다. `useSuspenseQueries`를 사용하면 끝에 `Suspense`를 유지합니다 |

**Requires selected:** `docs-explain-the-data-block-not-each-hook`, `typescript/naming-use-consistent-file-and-symbol-naming` (함께 적용)

**Incorrect 1 (쿼리와 뮤테이션 바인딩 이름이 제각각입니다):**

```ts
const responseGetProductListSuspense = useGetProductListSuspense();
const removeApi = useProductRemove();
```

**Correct 1 (지역 바인딩 접두사를 통일합니다):**

```ts
// ----------------------------------------------------------------------------------------
// 상품 목록 조회와 삭제 요청
//
// 조회가 멈추는 동안은 진입 파일의 경계가 처리한다.
// 삭제 뒤 무효화는 부르는 화면이 맡는다.
// ----------------------------------------------------------------------------------------
const responseProductListSuspense = useGetProductListSuspense();
const mutationProductRemove = useProductRemove();
```

> 나머지 예시와 예외는 [full rule](../rules/02-01-data-name-query-and-mutation-bindings-consistently.md)에 있습니다.
