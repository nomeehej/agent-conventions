---
title: Use Sections Only for Master Groups
titleKo: 섹션은 개발에 넘기는 master 묶음에만 씁니다
impact: HIGH
impactDescription: Ready for dev 표시가 개발에 넘길 master에만 붙어 Dev Mode에서 볼 곳이 헷갈리지 않습니다
appliesWhen:
  - ❖ 페이지에 섹션이나 frame을 만들 때
  - 예시, 목차, 안내, 토큰 견본을 페이지에 놓을 때
tags: layer, section, dev-mode
---

## Use Sections Only for Master Groups

**Impact: HIGH (Ready for dev 표시가 개발에 넘길 master에만 붙어 Dev Mode에서 볼 곳이 헷갈리지 않습니다)**

섹션은 개발에 넘기는 master 묶음에만 씁니다.
Ready for dev는 섹션, frame, 컴포넌트에 표시할 수 있고 이 skill은 섹션 단위로 표시하기로 정했습니다.
그래서 섹션이면 개발에 넘길 대상으로 보입니다.
예시, 목차, 안내, 토큰 견본은 frame에 둡니다.

| 놓는 것 | 틀 | 이름 |
| --- | --- | --- |
| master와 그 이름표, 노트, `_header` | 섹션. ❖ 페이지마다 하나 | 부품 이름. `select` |
| story 조합 예시 | frame | `examples`. 합친 코드 부품은 `examples/<부품>` |
| 목차 카드, 안내, 토큰 견본 | frame | 내용을 말하는 이름 |

❖ 페이지 바로 아래에는 그 섹션과 예시 frame만 둡니다.
master가 없는 섹션은 만들지 않습니다.

참고: [Figma 도움말: 섹션](https://help.figma.com/hc/en-us/articles/9771500257687),
[Figma 도움말: Dev Mode 상태](https://help.figma.com/hc/en-us/articles/26781702258583).

**Incorrect 1 (예시와 안내까지 섹션으로 만들어 개발에 넘길 대상처럼 보입니다):**

<<< ../examples/layer-use-sections-only-for-master-groups/01-incorrect.markdown

**Correct 1 (master 묶음만 섹션이고 예시는 frame입니다):**

<<< ../examples/layer-use-sections-only-for-master-groups/02-correct.markdown
