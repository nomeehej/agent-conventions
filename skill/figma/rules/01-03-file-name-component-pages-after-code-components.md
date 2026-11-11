---
title: Name Component Pages After Code Components
titleKo: ❖ 페이지와 master 이름은 코드 부품 폴더 이름과 같게 짓습니다
impact: HIGH
impactDescription: Figma 페이지, 코드 폴더, Storybook title이 한 이름이라 링크 도구와 검사가 이름 대조만으로 돕니다
appliesWhen:
  - ❖ 페이지나 master를 만들거나 이름을 바꿀 때
  - 라이브러리 파일의 페이지 순서를 정하거나 바꿀 때
reviewWith: storybook/file-title-stories-with-the-figma-page-name
tags: file, naming, page, storybook
---

## Name Component Pages After Code Components

**Impact: HIGH (Figma 페이지, 코드 폴더, Storybook title이 한 이름이라 링크 도구와 검사가 이름 대조만으로 돕니다)**

❖ 페이지와 master 이름은 코드 부품 폴더 이름(kebab-case)과 같게 짓습니다.
같은 이름이 Storybook title의 끝 마디가 되므로 Figma, 코드, story를 이름 대조만으로 잇습니다.

| 자리 | 이름 |
| --- | --- |
| Figma 페이지 | `❖ date-picker` |
| master | `date-picker` |
| 코드 폴더 | `src/component/ui/date-picker/` |
| Storybook title | `component/ui/date-picker` |
| 아이콘 | 페이지 `❖ icon`(`# foundation` 묶음), master `icon/pin`. 코드는 `src/asset/icon/pin.svg` |

페이지는 표지 → 안내 → foundation → `ui` → `widget` → utility 차례로 둡니다.
`ui`, `widget` 묶음 안은 이름 순이라 코드 폴더 목록, Storybook 사이드바와 순서가 같습니다.
코드 이름을 바꾸면 페이지와 master 이름도 같은 릴리스에서 바꿉니다.
아이콘은 코드 부품이 아니라 `asset/icon/`의 파일과 짝이라 위 이름 규칙의 예외입니다.
❖ 페이지를 만들면 같은 묶음의 `#` 목차에 그 부품의 카드도 함께 만들고 이름을 바꾸면 카드 이름도 바꿉니다.

참고: [Storybook 문서: 이름과 계층](https://storybook.js.org/docs/writing-stories/naming-components-and-hierarchy).

**Incorrect 1 (PascalCase와 띄어 쓴 이름이 섞이고 `ui`, `widget` 순서가 엉킵니다):**

<<< ../examples/file-name-component-pages-after-code-components/01-incorrect.markdown

**Correct 1 (코드 폴더 이름 그대로 묶음별 이름 순으로 둡니다):**

<<< ../examples/file-name-component-pages-after-code-components/02-correct.markdown
