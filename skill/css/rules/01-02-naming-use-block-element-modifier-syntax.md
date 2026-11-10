---
title: Use Block, Element, and Modifier Syntax
titleKo: 클래스 이름은 BEM 형식 `블록__요소--수정자`로 씁니다
impact: HIGH
impactDescription: 클래스 이름에서 소유자와 역할을 확인할 수 있습니다
appliesWhen:
  - 일반 CSS에서 프로젝트가 소유한 클래스를 새로 만들 때
  - 클래스 이름의 블록, 요소, 수정자 구분자나 대소문자 표기를 바꿀 때
tags: naming, class-grammar, ownership, bem
---

## Use Block, Element, and Modifier Syntax

**Impact: HIGH (클래스 이름에서 소유자와 역할을 확인할 수 있습니다)**

클래스 이름은 BEM 문법 `<block>__<element>[--<modifier>]`로 씁니다.
다른 규칙에서도 아래 한국어 이름을 씁니다.

| 자리 | 읽는 이름 | 담는 것 |
| --- | --- | --- |
| `block` | 블록 이름 | CSS 파일이 있는 소유자의 이름. `Button`은 `button`, `OrdersPage`는 `ordersPage`처럼 옮깁니다 |
| `element` | 요소 | 블록 이름이 가리키는 소유자 안의 UI 역할. 바깥 요소는 `root`, 나머지는 `listButton`, `emptyState`처럼 짓습니다 |
| `modifier` | 수정자 | 클래스 뒤에 `--`로 붙는 이름 |

CSS의 `{}` 블록과 헷갈리지 않도록 다른 규칙은 BEM 블록을 "블록 이름"으로 부릅니다.

흔히 쓰는 BEM 표기와는 두 군데가 다릅니다.

| BEM 관례 | 이 규칙 |
| --- | --- |
| `site-header__brand-link`처럼 하이픈으로 낱말을 이음 | `siteHeader__brandLink`처럼 camelCase로 잇습니다. 하이픈은 수정자 앞 `--`에만 씁니다 |
| 블록 클래스 `.button`이 바깥 요소를 맡음 | 블록 이름만 쓴 클래스는 만들지 않고 바깥 요소도 `button__root`로 씁니다 |

바깥 요소도 `__root`로 쓰면 `.table`, `.card`처럼 블록 이름만 쓴 클래스가 생기지 않아 전역 클래스와 겹치지 않습니다.
`table__`로 검색하면 한 소유자의 클래스를 모두 찾을 수 있습니다.

블록 이름에는 `ui`, `wg`, `pg` 같은 레이어 이름을 넣지 않습니다.
레이어는 파일이 놓인 폴더로 드러납니다.
수정자의 허용 범위는 `composition-do-not-build-structural-variants-with-modifiers`가 정합니다.
기계 검사는 이 문법을 정규식으로 등록한 `selector-class-pattern`이 담당합니다.

**Incorrect 1 (블록 이름에 레이어 이름을 넣고 블록에 바로 수정자를 달며 낱말을 snake_case와 kebab-case로 잇습니다):**

<<< ../examples/naming-use-block-element-modifier-syntax/01-incorrect.txt

**Correct 1 (바깥 요소도 `__root`로 쓰고 블록 이름, 요소, 수정자를 모두 camelCase로 씁니다):**

<<< ../examples/naming-use-block-element-modifier-syntax/02-correct.txt
