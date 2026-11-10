---
title: Name Handlers Predictably
titleKo: 핸들러 이름에 `handle` 접두사를 붙입니다
impact: MEDIUM
impactDescription: 이벤트 흐름을 이름으로 검색할 수 있습니다
appliesWhen:
  - 이벤트 핸들러를 새로 만들 때
  - 핸들러 이름이나 대상, 이벤트 표기를 바꿀 때
reviewWith: typescript/naming-use-consistent-file-and-symbol-naming, events-curry-extra-handler-arguments
tags: events, naming
---

## Name Handlers Predictably

**Impact: MEDIUM (이벤트 흐름을 이름으로 검색할 수 있습니다)**

이벤트 핸들러는 `handle` 접두사에 대상과 역할을 붙입니다.

| 상황 | 이름 |
| --- | --- |
| `on*` 프롭에 연결하는 핸들러 | `handle` + 대상 + 프롭 이름에서 `on`을 뗀 부분. 대상은 프롭을 가진 요소나 컴포넌트 또는 그 동작이 다루는 도메인 대상입니다 (`handleTableRowSelect`, `handleProductSave`) |

`on*`은 프롭 이름에만 씁니다.
`onClick`을 처리하는 구현은 `handleRowClick`처럼 이름 짓습니다.
같은 컴포넌트에서 이름이 겹치지 않도록 대상이 다르면 대상 이름을 넣습니다.

참고: [React 문서: 핸들러는 handle로 시작](https://react.dev/learn/responding-to-events#adding-event-handlers),
[React 문서: 핸들러 프롭은 on으로 시작](https://react.dev/learn/responding-to-events#naming-event-handler-props).

**Incorrect 1 (구현에 `on*`을 쓰고 대상이 이름에 없어 같은 이름이 겹칩니다):**

<<< ../examples/events-name-handlers-predictably/01-incorrect.ts

**Correct 1 (`handle` 접두사와 대상, 이벤트가 드러나는 이름을 씁니다):**

<<< ../examples/events-name-handlers-predictably/02-correct.ts
