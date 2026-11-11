---
title: Read the Official Skills and Keep These Names
titleKo: use_figma 전에 공식 skill을 읽고 이름과 구조는 이 skill을 따릅니다
impact: HIGH
impactDescription: Plugin API 사용법은 공식 skill에서 받고 공식 기본값이 이 파일의 이름과 구조를 흐트러뜨리지 않습니다
appliesWhen:
  - `use_figma`로 라이브러리 파일에 쓰기 시작할 때
  - 공식 `figma-use`, `figma-generate-library`의 기본값과 이 skill이 부딪힐 때
tags: script, official-skill, use-figma
---

## Read the Official Skills and Keep These Names

**Impact: HIGH (Plugin API 사용법은 공식 skill에서 받고 공식 기본값이 이 파일의 이름과 구조를 흐트러뜨리지 않습니다)**

`use_figma`를 부르기 전에 공식 `figma-use`와 `figma-generate-library`를 읽습니다.
Plugin API 문법과 작업 단계는 공식 skill을 따르고 아래 항목은 이 skill이 앞섭니다.
공식 skill도 파일에 이미 있는 규칙을 따르라고 합니다.

| 항목 | 공식 skill 기본 | 이 skill |
| --- | --- | --- |
| 부품 이름 | PascalCase `Button` | 코드 이름 kebab-case `button` |
| 내부 부품 | `_Parent/Sub` | `.select/option`. `_`는 문서용 부품 |
| 페이지 이름 | 맨 이름이나 이모지 | 채도 없는 기호 하나 |
| variant 상한 | 30개를 넘으면 나눔 | 축이 독립이면 한 set. 모양이 행렬을 깨면 나눕니다 |
| 여러 페이지 쓰기 | `figma-use`는 페이지마다 `use_figma`를 동시에 부름 | 쓰기는 한 번에 하나. 읽기만 동시에 부릅니다 |
| Code Connect | 라이브러리 전체 범위 | 범위 밖. Storybook design 링크가 코드와 잇습니다 |

변수 scope 지정, Web 코드 문법, primitive 별칭, 아이콘 `INSTANCE_SWAP`은 공식 skill과 같습니다.
쓰기 차례는 `script-write-one-script-at-a-time-from-one-owner`가 정합니다.

참고: [Figma 도움말: MCP용 Figma skill](https://help.figma.com/hc/en-us/articles/39166810751895).

**Incorrect 1 (공식 skill의 기본 이름을 그대로 써서 파일 규칙과 어긋납니다):**

<<< ../examples/script-read-the-official-skills-and-keep-these-names/01-incorrect.markdown

**Correct 1 (Plugin API는 공식 skill대로 쓰고 이름은 이 파일 규칙을 따릅니다):**

<<< ../examples/script-read-the-official-skills-and-keep-these-names/02-correct.markdown
