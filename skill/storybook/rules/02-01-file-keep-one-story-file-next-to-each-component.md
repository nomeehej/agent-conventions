---
title: Keep One Story File Next to Each Component
titleKo: story 파일은 부품마다 하나를 그 부품 폴더에 둡니다
impact: HIGH
impactDescription: 부품을 고치는 자리에서 story가 보이고 파일 이름만으로 어느 부품의 story인지 압니다
appliesWhen:
  - `*.stories.tsx` 파일을 새로 만들거나 옮기거나 이름을 바꿀 때
  - story 파일에 다른 부품의 story나 다른 파일과 함께 쓰는 story 도우미를 넣으려 할 때
tags: file, location, stories
---

## Keep One Story File Next to Each Component

**Impact: HIGH (부품을 고치는 자리에서 story가 보이고 파일 이름만으로 어느 부품의 story인지 압니다)**

story 파일은 `<부품>.stories.tsx` 이름으로 그 부품 폴더에 두고 부품 하나에 하나만 둡니다.
story만 쓰는 도우미(공통 `args`, 데코레이터, `play` 조각)는 그 story 파일 안에 둡니다.
다른 story 파일의 도우미를 가져오지 않습니다.

| 대상 | 자리 |
| --- | --- |
| `ui`, `widget` 부품 | `src/component/<레이어>/<부품>/<부품>.stories.tsx` |
| 합성 컴포넌트의 부품(`profile-dialog-header.tsx`) | 따로 두지 않습니다. 바깥 부품의 story가 조립한 모습으로 렌더합니다 |
| 합성 컴포넌트의 meta | `component`와 `Meta` 타입은 묶음 객체가 아니라 `Root`(`Panel.Root`)입니다. Header, Body는 `args.children`으로 조립합니다 |
| 진입 파일이 아닌 컴포넌트(반복 행, 경계 아래 내용물) | 따로 두지 않습니다. 진입 파일의 story가 그 안에서 렌더합니다 |
| `page`와 화면 구역 | story를 두지 않습니다. 화면 integration과 앱 mock 모드가 맡습니다 |
| gallery story(`test/**/*.story.tsx`) | `testing/story-compose-owned-state-with-real-providers`가 정합니다. CSF story와 서로 가져오지 않습니다 |

참고: [Storybook 문서: 이름과 묶음](https://storybook.js.org/docs/writing-stories/naming-components-and-hierarchy).

**Incorrect 1 (story를 모음 폴더에 두고 두 부품의 story를 한 파일에 담습니다):**

<<< ../examples/file-keep-one-story-file-next-to-each-component/01-incorrect.txt

**Correct 1 (부품 폴더마다 story 파일 하나를 부품 옆에 둡니다):**

<<< ../examples/file-keep-one-story-file-next-to-each-component/02-correct.txt

**Correct (합성 컴포넌트는 묶음이 아니라 `Root`를 meta에 두고 Header, Body를 `children`으로 조립합니다):**

<<< ../examples/file-keep-one-story-file-next-to-each-component/03-correct.stories.tsx
