---
title: Name Variables After Code Tokens
titleKo: 변수는 역할 경로로 짓고 Web 코드 문법에 코드 토큰을 적습니다
impact: HIGH
impactDescription: 변수 목록에 쓰임새에 맞는 변수만 보이고 Dev Mode가 코드에 있는 토큰 이름을 그대로 보여 줍니다
appliesWhen:
  - 라이브러리 파일에 변수를 만들거나 이름, 값, scope를 바꿀 때
  - 변수의 Web 코드 문법을 정하거나 바꿀 때
tags: variable, token, scope, code-syntax
---

## Name Variables After Code Tokens

**Impact: HIGH (변수 목록에 쓰임새에 맞는 변수만 보이고 Dev Mode가 코드에 있는 토큰 이름을 그대로 보여 줍니다)**

semantic 변수 이름은 쓰임새를 첫 마디로 둔 역할 경로입니다. `text/`, `border/`, `bg/`, `fill/`, `icon/`, `effect/`.
값은 primitive 변수의 별칭이고 scope는 그 쓰임새만 엽니다.
Web 코드 문법에는 코드에 있는 토큰 이름을 `var(--app-…)`로 그대로 적고 Figma 이름에서 지어내지 않습니다.

| 경로 | scope |
| --- | --- |
| `text/` | `TEXT_FILL` |
| `border/` | `STROKE_COLOR` |
| `bg/`, `fill/` | `FRAME_FILL`, `SHAPE_FILL` |
| `icon/` | `SHAPE_FILL` |
| `effect/` | `EFFECT_COLOR` |
| primitive | 비웁니다. publish에서도 숨깁니다 |

scope를 `ALL_SCOPES`로 두지 않습니다.
Figma 문서는 줄임말보다 온전한 낱말을 권하지만 `bg/`는 짧은 경로를 고른 우리 선택입니다.

참고: [Figma 도움말: 변수 만들기와 관리](https://help.figma.com/hc/en-us/articles/15145852043927),
[Figma 도움말: 토큰, 변수, 스타일](https://help.figma.com/hc/en-us/articles/18490793776023).

**Incorrect 1 (값을 직접 넣고 scope와 Web 코드 문법을 비워 둡니다):**

<<< ../examples/variable-name-variables-after-code-tokens/01-incorrect.js

**Correct 1 (역할 경로, primitive 별칭, scope, 코드 토큰 이름을 함께 답니다):**

<<< ../examples/variable-name-variables-after-code-tokens/02-correct.js
