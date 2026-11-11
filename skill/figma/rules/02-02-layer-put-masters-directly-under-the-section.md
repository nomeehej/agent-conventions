---
title: Put Masters Directly Under the Section
titleKo: master는 감싸는 frame 없이 섹션 바로 아래에 둡니다
impact: HIGH
impactDescription: 레이어 목록 맨 위에서 master를 바로 찾고 검사와 링크 도구가 깊이 하나에서 master를 찾습니다
appliesWhen:
  - ❖ 페이지 섹션 안에 master, 이름표, 노트, `_header`를 놓을 때
  - master를 frame이나 group으로 감싸려 할 때
tags: layer, section, master
---

## Put Masters Directly Under the Section

**Impact: HIGH (레이어 목록 맨 위에서 master를 바로 찾고 검사와 링크 도구가 깊이 하나에서 master를 찾습니다)**

master는 감싸는 frame 없이 섹션 바로 아래에 둡니다.
감싸는 frame이 있으면 레이어 목록을 한 단계 더 펼쳐야 하고 섹션 바로 아래에서 master를 찾는 검사가 깨집니다.
섹션 안 레이어는 레이어 목록 위에서부터 아래 차례로 둡니다.

| 차례 | 레이어 | 담는 것 |
| --- | --- | --- |
| 1 | master | set이나 단독 component. 본 부품이 먼저 |
| 2 | 보조 master | `.select/option`처럼 다른 master 안에서만 쓰는 부품 |
| 3 | `_labels / <이름>` | 행렬 이름표와 선 |
| 4 | `_note / dated` | 노트가 있을 때만 |
| 5 | `_header` | 묶음 이름, 부품 이름, 코드 경로, Storybook 경로와 story 수 |

master 이름 글자는 따로 두지 않습니다.
Figma가 섹션 바로 아래 master 위에 이름을 그려 주므로 같은 자리에 두면 겹쳐 보입니다.

**Incorrect 1 (master를 frame으로 감싸고 이름 글자와 이름표를 직접 그립니다):**

<<< ../examples/layer-put-masters-directly-under-the-section/01-incorrect.markdown

**Correct 1 (master가 섹션 바로 아래 맨 위에 있고 문서용 레이어가 차례로 뒤따릅니다):**

<<< ../examples/layer-put-masters-directly-under-the-section/02-correct.markdown
