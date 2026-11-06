---
title: Keep Page Block Names Traceable to Their Screen
titleKo: 화면이 소유한 블록 이름에 화면 이름을 드러냅니다
impact: MEDIUM
impactDescription: 클래스 이름에서 해당 화면을 추적할 수 있습니다
appliesWhen:
  - `page` 아래 CSS 파일의 블록 이름을 새로 짓거나 바꿀 때
  - 같은 이름 컴포넌트가 여러 소유자에 생겨 블록 이름을 구분해야 할 때
tags: slug, page, traceability
---

## Keep Page Block Names Traceable to Their Screen

**Impact: MEDIUM (클래스 이름에서 해당 화면을 추적할 수 있습니다)**

`page` 아래 CSS 파일의 블록 이름은 어느 화면의 것인지 추적할 수 있게 짓습니다.
어떤 파일이 화면 소유인지는 활성화된 프레임워크 규약이 정합니다.
CSS 블록 이름은 그 규약이 정한 화면 이름을 따릅니다.

```mermaid
flowchart LR
	q1{"화면 안의<br>컴포넌트인가?"} -- 예 --> q2{"다른 소유자의 블록 이름과<br>충돌하는가?"} -- 예 --> r2("자기 화면의 세그먼트를<br>앞에 덧붙임")
	q1 -- 아니요 --> r1("라우트 세그먼트에<br>Page를 붙임")
	q2 -- 아니요 --> r3("자기 이름만")
```

| 대상 | 블록 이름 |
| --- | --- |
| 라우트 진입 파일 | 라우트 폴더 이름에 `Page`를 붙인 진입 컴포넌트 이름을 camelCase로 씁니다. `orders/`는 `ordersPage`입니다. `shell`, `content`처럼 어느 화면에나 붙는 낱말은 쓰지 않습니다 |
| `Outlet` 프레임 | 활성화된 프레임워크 규약이 정한 진입 파일 이름을 씁니다. `root-outlet.tsx`는 `rootOutlet`, `main-outlet.tsx`는 `mainOutlet`입니다 |
| `:id`처럼 값이 런타임에 정해지는 동적 세그먼트 | 화면의 역할로 바꿉니다. `orders/:id`라면 라우트 폴더는 `order-detail`, 블록 이름은 `orderDetailPage`입니다 |
| 화면 안의 컴포넌트 | 자기 이름만 씁니다 |

라우트 경로나 폴더 이름에 없는 줄임말은 쓰지 않습니다.
덧붙일 때 중간 컴포넌트 이름은 넣지 않습니다.

**Incorrect 1 (화면 이름이 아닌 블록 이름을 씁니다):**

<<< ../examples/naming-keep-page-block-names-traceable/01-incorrect.txt

**Correct 1 (라우트 진입 파일에는 라우트 세그먼트에 `Page`를 붙여 씁니다):**

<<< ../examples/naming-keep-page-block-names-traceable/02-correct.txt

**Incorrect 2 (충돌이 없는데도 부모 블록 이름을 미리 붙입니다):**

<<< ../examples/naming-keep-page-block-names-traceable/03-incorrect.txt

**Correct 2 (화면 안의 컴포넌트는 자기 블록 이름만 씁니다):**

<<< ../examples/naming-keep-page-block-names-traceable/04-correct.txt

**Incorrect 3 (충돌을 피하려고 상위 경로 전체를 블록 이름에 붙입니다):**

<<< ../examples/naming-keep-page-block-names-traceable/05-incorrect.txt

**Correct 3 (충돌한 화면 이름만 최소로 덧붙입니다):**

<<< ../examples/naming-keep-page-block-names-traceable/06-correct.txt
