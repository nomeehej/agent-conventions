---
title: Show the Applied Library Version in the Storybook Title
titleKo: 코드에 반영한 Figma 라이브러리 버전을 Storybook 제목에 보입니다
impact: MEDIUM
impactDescription: 공유한 Storybook을 여는 사람이 어느 라이브러리 버전까지 코드에 반영됐는지 바로 압니다
appliesWhen:
  - Figma 라이브러리의 새 버전을 코드와 story에 반영할 때
  - `.storybook/manager.ts`를 추가하거나 바꾸거나 Storybook 빌드를 공유할 때
tags: docs, version, manager, release
---

## Show the Applied Library Version in the Storybook Title

**Impact: MEDIUM (공유한 Storybook을 여는 사람이 어느 라이브러리 버전까지 코드에 반영됐는지 바로 압니다)**

코드에 반영을 마친 Figma 라이브러리 버전을 `.storybook/manager.ts`의 `brandTitle`에 적습니다(`관리자 콘솔 DS 1.1.0`).
버전은 그 버전의 변경을 모두 반영한 커밋에서 올리고 공유는 `storybook build`가 만든 `storybook-static`으로 합니다.

참고: [Storybook 문서: 테마와 brandTitle](https://storybook.js.org/docs/configure/user-interface/theming),
[Storybook 문서: 정적 빌드](https://storybook.js.org/docs/sharing/publish-storybook).

**Incorrect 1 (제목에 버전이 없어 어느 라이브러리를 반영했는지 모릅니다):**

<<< ../examples/docs-show-the-applied-library-version/01-incorrect.ts

**Correct 1 (반영한 라이브러리 버전을 제목에 적습니다):**

<<< ../examples/docs-show-the-applied-library-version/02-correct.ts
