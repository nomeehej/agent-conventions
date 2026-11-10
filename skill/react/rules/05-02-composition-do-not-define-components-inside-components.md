---
title: Do Not Define Components Inside Components
titleKo: 컴포넌트 안에서 컴포넌트를 정의하지 않습니다
impact: HIGH
impactDescription: 렌더마다 컴포넌트 타입을 다시 만들어 생기는 재마운트와 상태 초기화를 막습니다
appliesWhen:
  - 컴포넌트 본문 안에 JSX를 반환하는 지역 함수, 컴포넌트를 추가하거나 옮길 때
  - 다시 렌더 시 재마운트, 포커스 초기화 징후를 다룰 때
reviewWith: composition-split-owner-parts-only-for-runtime-boundaries, screen-avoid-premature-abstraction
tags: composition, perf
---

## Do Not Define Components Inside Components

**Impact: HIGH (렌더마다 컴포넌트 타입을 다시 만들어 생기는 재마운트와 상태 초기화를 막습니다)**

컴포넌트 본문 안에서 다른 컴포넌트를 새로 정의하지 않습니다.
부모가 다시 렌더될 때마다 자식 컴포넌트 타입이 새로 만들어져
재마운트, 포커스 초기화, 애니메이션 재시작, 이펙트 재실행이 생깁니다.
`renderRow(row)`처럼 JSX를 반환하는 지역 함수도 본문 안에 두지 않습니다.
JSX 조각을 한 곳에서만 쓰면 쓰는 자리에 그대로 적습니다.
같은 소유자 안 두 곳 이상에서 쓸 때만 모듈 최상위의 독립 컴포넌트로 빼고 값은 프롭스로 넘깁니다.
파일로 뗄지는 `composition-split-owner-parts-only-for-runtime-boundaries`가 정합니다.

참고: [React 문서: 컴포넌트 정의를 중첩하지
않는다](https://react.dev/learn/your-first-component#nesting-and-organizing-components),
[React 문서: 같은 자리의 다른 컴포넌트는 상태를
잃는다](https://react.dev/learn/preserving-and-resetting-state#different-components-at-the-same-position-reset-state).

**Incorrect 1 (렌더마다 새 컴포넌트 타입을 만듭니다):**

<<< ../examples/composition-do-not-define-components-inside-components/01-incorrect.tsx

**Correct 1 (한 곳에서만 쓰는 JSX 조각은 쓰는 자리에 그대로 적습니다):**

<<< ../examples/composition-do-not-define-components-inside-components/02-correct.tsx
