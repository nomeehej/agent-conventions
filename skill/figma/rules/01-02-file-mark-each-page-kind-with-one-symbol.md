---
title: Mark Each Page Kind with One Symbol
titleKo: 페이지 종류는 이름 앞 기호 하나로 표시합니다
impact: HIGH
impactDescription: 페이지 목록만 보고 페이지 종류를 가르고 스크립트가 이름으로 페이지를 찾습니다
appliesWhen:
  - 라이브러리 파일에 페이지를 만들거나 이름을 바꿀 때
  - 페이지 묶음 사이에 구분선을 넣거나 뺄 때
tags: file, page, divider
---

## Mark Each Page Kind with One Symbol

**Impact: HIGH (페이지 목록만 보고 페이지 종류를 가르고 스크립트가 이름으로 페이지를 찾습니다)**

페이지 이름은 종류를 뜻하는 기호 하나와 공백으로 시작합니다.
기호는 채도 없는 글자만 쓰고 이모지는 쓰지 않습니다.
`❖`는 Figma 레이어 목록의 master 아이콘, `∷`는 스타일 아이콘과 같은 모양이라 따로 외울 것이 없습니다.

| 기호 | 페이지 | 예 |
| --- | --- | --- |
| `★` | 표지 | `★ Cover` |
| `¶` | 안내 문서 | `¶ Read me`, `¶ Changelog` |
| `#` | 묶음의 첫 페이지. 그 묶음의 목차 카드 | `# foundation`, `# ui`, `# widget` |
| `∷` | 변수와 스타일 견본 | `∷ color`, `∷ typography` |
| `❖` | master 부품 | `❖ button` |
| `✱` | 문서용 부품. 부품 이름의 `_` 접두사로 publish에서 숨깁니다 | `✱ utility` |

묶음 사이에는 Figma 페이지 구분선을 둡니다.
Figma에서는 빈 페이지 이름을 `-`로 시작하면 구분선이 되고 Plugin API는 `figma.createPageDivider()`로 만듭니다.
Plugin API 문서가 말하는 구분선 이름은 별표, en dash, em dash, 공백만으로 된 이름입니다.
그래서 스크립트에서는 이름을 `---`로 바꾸지 않고 `createPageDivider()`를 씁니다.
이름으로 페이지를 찾는 스크립트는 `isPageDivider`가 참인 페이지를 건너뜁니다.

참고: [Figma 도움말: 페이지와 구분선](https://help.figma.com/hc/en-us/articles/360038511293),
[Figma 문서: PageNode](https://developers.figma.com/docs/plugins/api/PageNode/).

**Incorrect 1 (이모지와 맨 이름이 섞여 페이지 종류를 이름으로 가를 수 없습니다):**

<<< ../examples/file-mark-each-page-kind-with-one-symbol/01-incorrect.markdown

**Correct 1 (기호 하나로 종류를 말하고 묶음 사이에 구분선을 둡니다):**

<<< ../examples/file-mark-each-page-kind-with-one-symbol/02-correct.markdown
