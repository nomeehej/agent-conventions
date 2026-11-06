---
title: Use Slug, Element, and Modifier Syntax
titleKo: 클래스 이름은 BEM 형식 `식별자__요소--수정자`로 씁니다
impact: HIGH
impactDescription: 클래스 이름에서 소유자와 역할을 확인할 수 있습니다
appliesWhen:
  - 일반 CSS에서 프로젝트가 소유한 클래스를 새로 만들 때
  - 이름, 식별자, 요소, 수정자의 구분자나 대소문자 표기를 바꿀 때
tags: naming, class-grammar, ownership, bem
---

## Use Slug, Element, and Modifier Syntax

**Impact: HIGH (클래스 이름에서 소유자와 역할을 확인할 수 있습니다)**

클래스 이름은 BEM 문법 `<slug>__<element>[--<modifier>]`로 씁니다.
다른 규칙에서도 아래 한국어 이름을 씁니다.

| 자리 | 읽는 이름 | 담는 것 |
| --- | --- | --- |
| `slug` | 식별자 | BEM의 블록. CSS 파일 소유자 이름을 `Button`은 `button`, `OrdersPage`는 `ordersPage`처럼 옮깁니다 |
| `element` | 요소 | 소유자 안의 UI 역할. 바깥 요소는 `root`, 나머지는 `listButton`, `emptyState`처럼 짓습니다 |
| `modifier` | 수정자 | 클래스 뒤에 `--`로 붙는 이름 |

흔히 쓰는 BEM 표기와는 두 군데가 다릅니다.

| BEM 관례 | 이 규칙 |
| --- | --- |
| `site-header__brand-link`처럼 하이픈으로 낱말을 이음 | `siteHeader__brandLink`처럼 camelCase로 잇습니다. 하이픈은 수정자 앞 `--`에만 씁니다 |
| 블록 클래스 `.button`이 바깥 요소를 맡음 | 식별자만 쓴 클래스는 만들지 않고 바깥 요소도 `button__root`로 씁니다 |

바깥 요소도 `__root`로 쓰면 `.table`, `.card` 같은 맨 이름이 생기지 않아 전역 클래스와 겹치지 않습니다.
`table__`로 검색하면 한 소유자의 클래스를 모두 찾을 수 있습니다.

식별자에는 `ui`, `wg`, `pg` 같은 레이어 이름을 넣지 않습니다.
레이어는 파일이 놓인 폴더로 드러납니다.
수정자의 허용 범위는 `composition-do-not-build-structural-variants-with-modifiers`가 정합니다.
기계 검사는 이 문법을 정규식으로 등록한 `selector-class-pattern`이 담당합니다.

**Incorrect 1 (식별자에 레이어 이름을 넣고 블록에 바로 수정자를 달며 낱말을 snake_case와 kebab-case로 잇습니다):**

<<< ../examples/naming-use-slug-element-modifier-syntax/01-incorrect.txt

**Correct 1 (바깥 요소도 `__root`로 쓰고 식별자, 요소, 수정자를 모두 camelCase로 씁니다):**

<<< ../examples/naming-use-slug-element-modifier-syntax/02-correct.txt
