---
title: Reach States Through Args, Then beforeEach, Then play
titleKo: 상태는 `args`, `beforeEach`, `play` 차례로 가장 가벼운 수단으로 만듭니다
impact: HIGH
impactDescription: story가 렌더만으로 재현되고 조작이 필요한 상태만 `play`에 남아 story 테스트가 빠르고 안정됩니다
appliesWhen:
  - story의 상태를 `args`, `beforeEach`, `play`, `loaders`, 네트워크 mock 가운데 무엇으로 만들지 정하거나 바꿀 때
  - 프롭으로 열 수 없는 상태(열린 팝업, 입력 뒤 모습)를 story로 재현할 때
reviewWith: testing/component-assert-the-state-each-play-reaches, testing/data-control-time-randomness-and-environment
tags: story, state, play, before-each
---

## Reach States Through Args, Then beforeEach, Then play

**Impact: HIGH (story가 렌더만으로 재현되고 조작이 필요한 상태만 `play`에 남아 story 테스트가 빠르고 안정됩니다)**

상태는 프롭이면 `args`, 프롭 밖의 시간과 외부 store는 `beforeEach`, 조작 뒤에만 생기면 `play`로 만듭니다.
`ui`, `widget`은 화면이 조회한 서버 데이터를 프롭으로 받으므로 story도 `args`로 넘기고 네트워크 mock을 두지 않습니다.

| 상태를 만드는 것 | 수단 |
| --- | --- |
| 프롭 값(입력값, 오류 표시, 비활성, 서버 데이터) | `args`로 넘깁니다 |
| 프롭 밖 값(오늘 날짜, 외부 store) | `beforeEach`에서 값을 정합니다. 모듈 대체 등록은 preview의 `sb.mock`이 맡습니다 |
| 클릭, 입력 뒤에만 생기는 상태(열린 달력, 열린 모달) | `play`로 조작합니다. body로 포털되는 내용은 `canvas`가 아니라 `screen`으로 찾습니다 |
| 서버 응답이 있어야 생기는 상태(빈 목록, 요청 실패) | story로 만들지 않습니다. 화면 integration이 맡습니다 |

참고: [Storybook 문서: screen](https://storybook.js.org/docs/writing-stories/play-function#working-with-the-canvas),
[Storybook 문서: beforeEach](https://storybook.js.org/docs/writing-tests/interaction-testing),
[Storybook 문서: mock 모듈](https://storybook.js.org/docs/writing-stories/mocking-data-and-modules/mocking-modules).

**Incorrect 1 (프롭으로 넣을 수 있는 날짜를 달력 조작으로 채웁니다):**

<<< ../examples/story-reach-states-through-args-then-before-each-then-play/01-incorrect.stories.tsx

**Correct 1 (값이 있는 기본 variant를 `args`로 만듭니다):**

<<< ../examples/story-reach-states-through-args-then-before-each-then-play/02-correct.stories.tsx

**Incorrect 2 (서버 데이터를 네트워크 mock으로 넣어 `widget`이 서버를 부르는 모습을 굳힙니다):**

<<< ../examples/story-reach-states-through-args-then-before-each-then-play/03-incorrect.stories.tsx

**Correct 2 (화면이 넘길 서버 데이터를 `args`로 넘깁니다):**

<<< ../examples/story-reach-states-through-args-then-before-each-then-play/04-correct.stories.tsx

**Correct (오늘 날짜는 `beforeEach`에서 정하고 열린 달력만 `play`로 열어 `screen`으로 확인합니다):**

<<< ../examples/story-reach-states-through-args-then-before-each-then-play/05-correct.stories.tsx
