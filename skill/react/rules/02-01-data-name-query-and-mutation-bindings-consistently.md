---
title: Name Query and Mutation Bindings Consistently
titleKo: 쿼리, 뮤테이션 바인딩에 `response`, `mutation` 접두사를 붙입니다
impact: MEDIUM
impactDescription: 지역 바인딩 이름으로 생성된 API 훅을 쉽게 찾을 수 있습니다
appliesWhen:
  - React Query 쿼리, 뮤테이션 훅의 지역 바인딩을 추가하거나 이름을 바꿀 때
  - 쿼리나 뮤테이션 훅의 반환값을 새 지역 변수에 담을 때
requiresSelected: typescript/naming-use-consistent-file-and-symbol-naming, docs-explain-the-data-block-not-each-hook
reviewWith: data-preserve-origin-chaining
tags: data, state, naming
---

## Name Query and Mutation Bindings Consistently

**Impact: MEDIUM (지역 바인딩 이름으로 생성된 API 훅을 쉽게 찾을 수 있습니다)**

쿼리와 뮤테이션의 지역 바인딩 이름은 생성된 훅 이름에서 만듭니다.
TanStack Query 문서의 `query`, `mutation` 같은 이름은 어느 API의 훅인지 알려 주지 않아 생성된 훅을 찾을 수 없습니다.

| 바인딩 | 이름 |
| --- | --- |
| 생성된 단일 API 훅 | 조회 훅은 `use`를, 이름 맨 앞에 `Get`이 오면 `useGet`까지를 `response`로 바꿉니다. 뮤테이션 훅은 `use`만 `mutation`으로 바꿉니다. 나머지 낱말은 모두 유지하며 이름 중간의 `Get`도 그대로 둡니다 |
| 여러 쿼리를 합친 바인딩 | `response` 뒤에 결과 이름을 씁니다. `useSuspenseQueries`를 사용하면 끝에 `Suspense`를 유지합니다 |

**Incorrect 1 (쿼리와 뮤테이션 바인딩 이름이 제각각입니다):**

<<< ../examples/data-name-query-and-mutation-bindings-consistently/01-incorrect.ts

**Correct 1 (지역 바인딩 접두사를 통일합니다):**

<<< ../examples/data-name-query-and-mutation-bindings-consistently/02-correct.ts
