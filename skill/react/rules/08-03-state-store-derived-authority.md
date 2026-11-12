---
title: Store Shared Derived Decisions Only When They Are Truly Shared
titleKo: 파생 판단은 여러 화면이 함께 쓸 때만 스토어로 올립니다
impact: HIGH
impactDescription: 같은 도메인 판별 로직이 여러 화면에 퍼지지 않습니다
appliesWhen:
  - 여러 화면, 메뉴, 라우트 가드가 쓰는 접근 권한 같은 파생 판단을 스토어에 저장, 동기화할 때
  - 단일 화면에서만 쓰는 값까지 스토어로 올리려 할 때
reviewWith: docs-explain-the-data-block-not-each-hook, state-calculate-derived-values-during-render
tags: state, zustand
---

## Store Shared Derived Decisions Only When They Are Truly Shared

**Impact: HIGH (같은 도메인 판별 로직이 여러 화면에 퍼지지 않습니다)**

파생 판단은 여러 화면, 메뉴, 라우트 가드가 반복해서 쓸 때만 스토어로 올립니다.
단일 화면에서 한두 번 읽는 쿼리 필드는 복제하지 않습니다.
파생이 아닌 전역 값은 `state-choose-state-tools-by-source-of-truth`가 정합니다.

| 작업 | 기준 |
| --- | --- |
| 도메인 판별 | 초기화, 레이아웃 등 한 경계에 모으고 화면은 `permissionStore.canEditProduct` 같은 결과만 읽습니다 |
| 스토어 채우기 | 쿼리에는 `onSuccess` 같은 성공 콜백이 없으므로 소유자가 분명한 경계의 `useEffect`에서 처리합니다 |
| 채워지기 전 렌더 | 이펙트는 커밋 뒤에 돌므로 판단을 읽는 화면은 판단이 채워진 뒤에 렌더합니다. 라우트 프레임이 자식 라우트를 늦게 그리는 방법은 `ownership-group-screens-under-route-frames`를 따릅니다 |
| 이펙트 예외 근거 | `state-calculate-derived-values-during-render`의 예외이므로 `typescript/docs-justify-convention-exceptions-with-a-reason-comment`에 따라 공유 이유를 남깁니다 |
| 이펙트의 스토어 접근 | 선택자로 `set` 함수만 꺼내고 값 의존성은 그대로 적습니다. 스토어 객체 전체에 의존하면 `set`마다 다시 실행됩니다 |

참고: [Redux 가이드: 상태는 최소로](https://redux.js.org/style-guide/#keep-state-minimal-and-derive-additional-values),
[Redux 가이드: 상태가 있을 자리](https://redux.js.org/style-guide/#evaluate-where-each-piece-of-state-should-live).

**Incorrect 1 (개별 화면이 도메인을 판별하고 스토어에 저장합니다):**

<<< ../examples/state-store-derived-authority/01-incorrect.ts

**Correct 1 (화면은 스토어에 채워진 결과만 참조합니다):**

<<< ../examples/state-store-derived-authority/02-correct.ts

**Incorrect 2 (스토어 전체에 의존하는 이펙트가 `set`마다 다시 실행됩니다):**

<<< ../examples/state-store-derived-authority/03-incorrect.ts

**Correct 2 (초기화 경계에서 스토어를 채우고 스토어에서는 `set` 함수만 선택합니다):**

<<< ../examples/state-store-derived-authority/04-correct.ts
