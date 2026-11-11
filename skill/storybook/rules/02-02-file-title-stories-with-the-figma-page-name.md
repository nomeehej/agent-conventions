---
title: Title Stories with the Figma Component Page Name
titleKo: story `title`은 Figma 부품 페이지와 같은 이름으로 씁니다
impact: HIGH
impactDescription: Figma 페이지, 코드 폴더, 사이드바가 한 이름이라 하나만 알아도 나머지를 찾습니다
appliesWhen:
  - meta의 `title`을 쓰거나 바꿀 때
  - 부품 폴더 이름이나 Figma 부품 페이지 이름을 바꿀 때
tags: file, title, naming, figma
---

## Title Stories with the Figma Component Page Name

**Impact: HIGH (Figma 페이지, 코드 폴더, 사이드바가 한 이름이라 하나만 알아도 나머지를 찾습니다)**

`title`은 `component/<레이어>/<부품>`이고 끝 마디는 부품 폴더 이름이자 Figma 부품 페이지(`❖ text-field`)의 이름입니다.
`title`을 생략하면 파일 경로에서 지은 이름이 `stories` 설정에 따라 달라지므로 직접 적습니다.
Figma에서 다른 master에 속성으로 합쳐진 부품은 자기 페이지가 없으므로 끝 마디에 부품 폴더 이름을 씁니다.
그 story의 design 링크는 합쳐진 master의 variant 노드에 잇습니다.

| 바꾼 것 | 함께 할 일 |
| --- | --- |
| 부품 폴더 이름 | `title` 끝 마디와 Figma 부품 페이지 이름을 같은 이름으로 바꿉니다 |
| `title` | story id와 URL이 바뀝니다. `design-regenerate-links-from-the-library-build`대로 링크 표를 고치고 다시 씁니다 |

참고: [Storybook 문서: 이름과 묶음](https://storybook.js.org/docs/writing-stories/naming-components-and-hierarchy),
[Storybook 문서: story 고유 링크](https://storybook.js.org/docs/configure/user-interface/sidebar-and-urls).

**Incorrect 1 (Figma와 코드에 없는 묶음과 PascalCase 이름을 지어 냅니다):**

<<< ../examples/file-title-stories-with-the-figma-page-name/01-incorrect.stories.tsx

**Correct 1 (코드 경로이자 Figma 부품 페이지 이름을 그대로 씁니다):**

<<< ../examples/file-title-stories-with-the-figma-page-name/02-correct.stories.tsx
