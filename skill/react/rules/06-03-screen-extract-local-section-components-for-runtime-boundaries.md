---
title: Extract Local Section Components Only for Runtime Boundaries
titleKo: 런타임 경계가 있는 섹션만 화면 지역 컴포넌트로 추출합니다
impact: HIGH
impactDescription: 화면 흐름을 유지하면서 자체 책임이 있는 섹션만 분리합니다
appliesWhen:
  - 화면 지역 섹션 컴포넌트를 새로 추출할 때
  - 기존 섹션에 비동기, 지역 상태, 프로바이더, 상호작용, 외부 라이브러리, 성능 처리를 넣거나 뺄 때
requiresSelected: composition-split-owner-parts-only-for-runtime-boundaries
tags: screen, routes
---

## Extract Local Section Components Only for Runtime Boundaries

**Impact: HIGH (화면 흐름을 유지하면서 자체 책임이 있는 섹션만 분리합니다)**

라우트 진입의 지역 컴포넌트는 런타임 책임 중 하나를 **직접 소유할 때만** 추출합니다.
단순 래퍼, `className` 묶음, 들여쓰기 감소는 추출 근거가 아닙니다.

분리 근거가 되는 책임 표는 `composition-split-owner-parts-only-for-runtime-boundaries`를 따릅니다.
그 규칙을 함께 적용합니다.
`widget`, `ui` 전용 책임인 재사용과 조립은 라우트 진입에 쓰지 않습니다.

추출한 파일의 배치는 `ownership-place-owner-files-in-role-folders`를 따릅니다.
진입 파일의 JSX에 나타나지 않는 섹션을 다른 섹션 파일 안에서 렌더하면 과하게 나눈 것입니다.

참고: [Carson Gross: 행동의 지역성(Locality of Behaviour)](https://htmx.org/essays/locality-of-behaviour/),
[John Carmack: 인라인 코드](https://number-none.com/blow/john_carmack_on_inlined_code.html).

**Incorrect 1 (감싸기만 하는 래퍼를 섹션으로 추출합니다):**

<<< ../examples/screen-extract-local-section-components-for-runtime-boundaries/01-incorrect.tsx

**Correct 1 (데이터, 상태, 상호작용을 소유한 섹션만 추출하고 자신의 쿼리 키로 읽습니다):**

<<< ../examples/screen-extract-local-section-components-for-runtime-boundaries/02-correct.tsx
