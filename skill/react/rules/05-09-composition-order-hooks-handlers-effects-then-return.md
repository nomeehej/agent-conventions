---
title: Order Hooks, Handlers, Effects, Then Return
titleKo: 본문은 훅, 핸들러, 이펙트, 반환 순으로 배치합니다
impact: HIGH
impactDescription: 컴포넌트마다 훅, 핸들러, 이펙트를 같은 순서로 찾을 수 있습니다
appliesWhen:
  - 컴포넌트 본문에 훅, 핸들러, 이펙트를 추가하거나 자리를 옮길 때
  - 본문 선언이 아래 선언을 참조해 순서를 다시 잡을 때
  - 컴포넌트 본문에 지역 함수나 이름 붙인 판정을 둘 때
reviewWith: screen-keep-derived-values-close, events-run-user-actions-in-handlers-not-effects
tags: composition, ordering
---

## Order Hooks, Handlers, Effects, Then Return

**Impact: HIGH (컴포넌트마다 훅, 핸들러, 이펙트를 같은 순서로 찾을 수 있습니다)**

컴포넌트 본문은 아래 네 구획 순서로 작성합니다.
렌더 중에 읽는 값은 사용 위치보다 위에서 선언합니다.

```mermaid
flowchart LR
	s1("훅<br>라우터, 스토어, 쿼리, 컨텍스트<br>커스텀 훅, useState, useRef") --> s2("핸들러<br>handle* 함수")
	s2 --> s3("이펙트<br>useEffect, useLayoutEffect")
	s3 --> s4("반환<br>이른 반환과 JSX")
```

이펙트의 인자와 의존성 배열은 해당 줄에서 평가되므로 이펙트를 마지막 훅으로 두어 앞선 선언을 참조합니다.
이른 반환은 모든 훅 뒤에 두어 렌더마다 훅 호출 개수를 유지합니다.
구획 안에서는 선언 뒤에 참조한다는 조건만 지킵니다.
파생값은 `screen-keep-derived-values-close`에 따라 사용처에서 계산합니다.
계산하는 지역 함수와 이름 붙인 판정은 구획을 따로 두지 않고 처음 쓰는 자리 바로 위에 둡니다.
핸들러가 처음 쓰면 그 핸들러 위, 반환만 쓰면 반환 바로 위입니다.

**Incorrect 1 (같은 종류가 흩어지고 이펙트가 아래 선언을 의존성으로 참조합니다):**

<<< ../examples/composition-order-hooks-handlers-effects-then-return/01-incorrect.tsx

**Correct 1 (네 구획이 순서대로 놓입니다):**

<<< ../examples/composition-order-hooks-handlers-effects-then-return/02-correct.tsx

**Incorrect 2 (반환에서만 읽는 판정을 훅 구획에 둡니다):**

<<< ../examples/composition-order-hooks-handlers-effects-then-return/03-incorrect.tsx

**Correct 2 (판정을 처음 쓰는 반환 바로 위에 둡니다):**

<<< ../examples/composition-order-hooks-handlers-effects-then-return/04-correct.tsx
