---
title: Compose Classes With `clsx()`
titleKo: 클래스는 `clsx()`로 조합합니다
impact: MEDIUM
impactDescription: 기본 클래스와 상태 수정자의 조합을 TSX에서 한눈에 읽을 수 있습니다
appliesWhen:
  - TSX의 `className`을 추가, 수정할 때
  - 기본 클래스, 수정자, 선택 클래스를 함께 엮을 때
reviewWith: >-
  composition-write-modifiers-as-conditions,
  typescript/values-avoid-lookup-tables-for-simple-choices
tags: clsx, tsx, className
---

## Compose Classes With `clsx()`

**Impact: MEDIUM (기본 클래스와 상태 수정자의 조합을 TSX에서 한눈에 읽을 수 있습니다)**

TSX의 `className`은 클래스가 하나여도 `clsx()`로 조합합니다.
클래스가 하나일 때부터 `clsx()`로 시작해 두면 수정자를 더할 때 인자만 늘고 모든 `className`이 한 형태로 검색됩니다.
인자는 **기본 클래스 → 수정자 → 받은 `className`** 순서로 적습니다.
`+`, `join()`, 삼항 연산자로 클래스를 조합하거나 고르지 않습니다.
클래스 이름에 값을 끼워 넣지 않는 규칙은 `composition-write-modifiers-as-conditions`가 정합니다.

참고: [clsx 문서: 조건부 className 조립](https://github.com/lukeed/clsx#usage).

**Incorrect 1 (문자열 연결로 클래스 조합을 숨깁니다):**

<<< ../examples/composition-compose-classes-with-clsx/01-incorrect.tsx

**Correct 1 (기본 클래스와 수정자를 `clsx()`로 조합합니다):**

<<< ../examples/composition-compose-classes-with-clsx/02-correct.tsx
