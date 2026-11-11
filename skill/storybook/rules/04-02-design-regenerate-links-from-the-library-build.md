---
title: Regenerate Design Links from the Story to Node Table
titleKo: design 링크는 story id와 노드 id 표에서 도구로 다시 씁니다
impact: HIGH
impactDescription: 손으로 고치다 생기는 오타와 빠짐 없이 Figma publish와 이름 변경 뒤의 링크를 한 번에 맞춥니다
appliesWhen:
  - Figma 라이브러리 publish로 variant나 `examples` 칸 노드가 바뀌었을 때
  - story export 이름이나 `title`을 바꾸거나 story 파일의 `parameters.design` URL을 달거나 고치려 할 때
tags: design, figma, link, tooling
---

## Regenerate Design Links from the Story to Node Table

**Impact: HIGH (손으로 고치다 생기는 오타와 빠짐 없이 Figma publish와 이름 변경 뒤의 링크를 한 번에 맞춥니다)**

design 링크는 story id와 Figma 노드 id를 짝지은 표 하나(`.storybook/design-links.json`)에서 도구로 story 파일에 씁니다.
story 파일의 URL을 손으로 쓰거나 고치지 않고 표를 고친 뒤 도구를 다시 돌립니다.
도구가 없는 프로젝트는 표를 읽어 `parameters.design.url`을 쓰는 스크립트부터 만듭니다.

| 바뀐 것 | 할 일 |
| --- | --- |
| 새 story | 표에 story id와 노드 id 행을 더하고 도구를 돌립니다 |
| publish로 바뀐 노드 | 표의 노드 id를 고치고 도구를 돌립니다 |
| story export 이름, `title` | story id가 바뀝니다. 표의 키를 고치고 도구를 돌립니다 |
| Figma에서 지운 노드 | 표의 값을 `null`로 두면 도구가 그 story의 링크를 지웁니다 |

참고: [Storybook 문서: story 고유 링크](https://storybook.js.org/docs/configure/user-interface/sidebar-and-urls).

**Incorrect (publish 뒤 바뀐 노드를 story 파일에서 손으로 고쳐 다른 story가 옛 노드에 남습니다):**

<<< ../examples/design-regenerate-links-from-the-library-build/01-incorrect.stories.tsx

**Correct (표의 노드 id를 고치고 도구로 모든 story 파일에 다시 씁니다):**

<<< ../examples/design-regenerate-links-from-the-library-build/02-correct-1.json

<<< ../examples/design-regenerate-links-from-the-library-build/02-correct-2.txt
