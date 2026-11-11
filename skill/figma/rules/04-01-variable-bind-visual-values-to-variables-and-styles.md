---
title: Bind Visual Values to Variables and Styles
titleKo: master의 색, 간격, 모서리, 글자, 효과는 변수와 스타일에 묶습니다
impact: HIGH
impactDescription: 토큰 값을 바꾸면 모든 master가 따라 바뀌고 Dev Mode가 값 대신 코드 토큰 이름을 보여 줍니다
appliesWhen:
  - master의 칠하기, 테두리, 간격, 모서리, 글자, 효과를 정할 때
  - master에 묶인 변수나 스타일을 바꾸거나 풀 때
tags: variable, style, token
---

## Bind Visual Values to Variables and Styles

**Impact: HIGH (토큰 값을 바꾸면 모든 master가 따라 바뀌고 Dev Mode가 값 대신 코드 토큰 이름을 보여 줍니다)**

master의 색, 간격, 모서리는 변수에, 글자와 효과는 스타일에 묶습니다.
master의 색은 semantic 컬렉션(`color`)의 변수만 씁니다.
primitive 컬렉션은 semantic 변수의 별칭 원본으로만 두고 master에 직접 묶지 않습니다.

| 값 | 묶는 곳 |
| --- | --- |
| 칠하기, 테두리 색 | semantic 색 변수 |
| 간격, 안쪽 여백, 모서리 | 수 변수. 토큰에 없는 값(15, 21)은 숫자 그대로 둡니다 |
| 글자 | 글자 스타일. 글꼴과 굵기는 스타일 안의 변수 |
| 그림자, 링 | 효과 스타일 |
| 반투명 칠 | 색 칸 레이어의 레이어 투명도. 변수에 묶인 칠하기는 칠하기 투명도가 그려지지 않습니다 |

변수 이름과 scope는 `variable-name-variables-after-code-tokens`가 정합니다.

참고: [Figma 도움말: 변수, 컬렉션, 모드](https://help.figma.com/hc/en-us/articles/14506821864087),
[Figma 도움말: 토큰, 변수, 스타일](https://help.figma.com/hc/en-us/articles/18490793776023).

**Incorrect 1 (색, 모서리, 글자 크기를 값으로 직접 넣습니다):**

<<< ../examples/variable-bind-visual-values-to-variables-and-styles/01-incorrect.js

**Correct 1 (semantic 변수와 글자 스타일에 묶습니다):**

<<< ../examples/variable-bind-visual-values-to-variables-and-styles/02-correct.js
