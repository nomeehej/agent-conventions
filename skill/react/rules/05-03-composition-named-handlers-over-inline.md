---
title: Use Named Handlers Instead of Hiding Logic in JSX
titleKo: JSX 안 로직은 이름 붙인 핸들러로 뺍니다
impact: MEDIUM
impactDescription: 부수효과, 분기, 비동기 흐름을 일반 코드 흐름에서 읽습니다
appliesWhen:
  - TSX 이벤트 프롭에 인라인 화살표 콜백을 추가, 수정할 때
  - 제외: 인자 없이 핸들러 참조만 넘기는 경우
requiresSelected: docs-require-jsdoc-on-key-declarations
reviewWith: >-
  events-run-user-actions-in-handlers-not-effects, events-curry-extra-handler-arguments,
  typescript/functions-extract-helpers-only-when-the-boundary-is-real
tags: composition, jsx, handlers
---

## Use Named Handlers Instead of Hiding Logic in JSX

**Impact: MEDIUM (부수효과, 분기, 비동기 흐름을 일반 코드 흐름에서 읽습니다)**

JSX 이벤트 프롭에는 이름 붙인 핸들러 참조만 넘깁니다.
`() => setIsOpen(true)`처럼 호출 하나뿐인 화살표도 인라인 콜백이므로 핸들러로 뺍니다.

추가 인자를 넘기려고 `onClick={() => handleX(id)}` 같은 인라인 래퍼를 쓰지 않습니다.
그 자리는 `events-curry-extra-handler-arguments`가 커링으로 정합니다.

**Incorrect 1 (분기와 비동기를 JSX 안에 숨깁니다):**

<<< ../examples/composition-named-handlers-over-inline/01-incorrect.tsx

**Correct 1 (로직을 이름 붙인 핸들러로 뺍니다):**

<<< ../examples/composition-named-handlers-over-inline/02-correct.tsx

**Incorrect 2 (호출 하나뿐인 화살표도 JSX 안에 둡니다):**

<<< ../examples/composition-named-handlers-over-inline/03-incorrect.tsx

**Correct 2 (호출 하나뿐이어도 이름 붙인 핸들러로 뺍니다):**

<<< ../examples/composition-named-handlers-over-inline/04-correct.tsx
