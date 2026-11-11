---
title: Write One Script at a Time from One Owner
titleKo: Figma 쓰기는 한 담당이 한 번에 하나씩 합니다
impact: HIGH
impactDescription: 동시에 돈 스크립트가 같은 페이지와 변수를 덮어쓰지 않고 새 토큰이 부품마다 따로 생기지 않습니다
appliesWhen:
  - 여러 부품을 나눠 분석하거나 그릴 때
  - 부품을 그리다 새 변수나 스타일이 필요해질 때
tags: script, use-figma, token
---

## Write One Script at a Time from One Owner

**Impact: HIGH (동시에 돈 스크립트가 같은 페이지와 변수를 덮어쓰지 않고 새 토큰이 부품마다 따로 생기지 않습니다)**

분석은 부품마다 나눠 동시에 해도 되지만 Figma 쓰기는 한 담당이 `use_figma`를 한 번에 하나씩 부릅니다.
새 변수와 스타일은 부품마다 만들지 않고 한 줄에 하나씩 목록으로 모아 부품을 그리기 전에 한 번에 만듭니다.
목록 형식은 `NEW color/<이름> = <primitive 이름이나 #RRGGBB> [scope] — 이유`입니다.

| 단계 | 누가 | Figma |
| --- | --- | --- |
| 분석. 코드, 측정, 속성 설계, 토큰 대응 | 부품마다 따로, 동시에 | 읽기만 합니다 |
| 새 변수, 스타일 만들기 | 한 담당 | 목록을 한 번에 만듭니다 |
| master 그리기 | 한 담당 | 부품 하나씩 차례로 씁니다 |

분석을 맡은 쪽은 자기 부품의 ❖ 페이지 밖을 고치지 않고 페이지, 변수, 스타일을 지우지 않습니다.
쓰기가 끝나면 바뀐 섹션의 스크린샷을 Storybook 모습과 대조합니다.

**Incorrect 1 (부품마다 담당이 동시에 쓰고 각자 비슷한 변수를 만듭니다):**

<<< ../examples/script-write-one-script-at-a-time-from-one-owner/01-incorrect.markdown

**Correct 1 (새 토큰을 목록으로 모아 먼저 만들고 부품은 한 담당이 차례로 그립니다):**

<<< ../examples/script-write-one-script-at-a-time-from-one-owner/02-correct.markdown
