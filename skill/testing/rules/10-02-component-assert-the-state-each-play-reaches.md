---
title: Assert the State Each Play Reaches
titleKo: play가 만든 상태는 같은 play에서 단언합니다
impact: HIGH
impactDescription: 상호작용이 깨지면 렌더 테스트가 통과해도 story 테스트가 실패합니다
appliesWhen:
  - story의 `play`를 추가하거나 `play`가 만든 상태의 단언을 바꿀 때
  - 제외: `play` 없이 args만 바꾸는 경우
tags: testing, component, story
---

## Assert the State Each Play Reaches

**Impact: HIGH (상호작용이 깨지면 렌더 테스트가 통과해도 story 테스트가 실패합니다)**

`play`로 연 상태나 입력한 값은 같은 `play`의 끝에서 단언합니다.
단언 없는 `play`는 상태를 재현할 뿐이라 상호작용이 깨져도 통과합니다.
기대값은 구현에서 꺼내지 않고 부품 spec과 Figma가 정한 계약에서 가져옵니다.
`case-derive-expectations-from-independent-contracts`가 정합니다.

| 단언할 것 | 쓰는 것 |
| --- | --- |
| 부품 안의 모양과 상태 | `canvas`의 `getByRole`, `getByLabelText` |
| 팝업, dialog처럼 portal로 나간 것 | `screen`의 `findByRole` |
| callback 호출과 인자 | meta `args`의 `fn()`과 `toHaveBeenCalledWith` |
| 전환 효과가 있는 요소가 보임 | `waitFor` 안의 `toBeVisible` |

전환 효과가 있는 요소는 `findBy`가 풀린 순간 opacity가 0이라 `toBeVisible`이 실패합니다.
`waitFor` 안에서 단언합니다.
`play`에는 GIVEN, WHEN, THEN 주석을 달지 않습니다.
구간 주석은 Playwright integration, E2E만 씁니다. `case-describe-one-observable-behavior`가 정합니다.

참고: [Storybook 문서: Interaction tests](https://storybook.js.org/docs/writing-tests/interaction-testing),
[Storybook 문서: Play function](https://storybook.js.org/docs/writing-stories/play-function).

**Incorrect 1 (날짜를 고르고도 callback이 호출됐는지 단언하지 않습니다):**

<<< ../examples/component-assert-the-state-each-play-reaches/01-incorrect.stories.tsx

**Correct 1 (선택한 날짜가 callback에 전달됐는지 단언합니다):**

<<< ../examples/component-assert-the-state-each-play-reaches/02-correct.stories.tsx

**Incorrect 2 (전환 중인 달력이 바로 보인다고 단언합니다):**

<<< ../examples/component-assert-the-state-each-play-reaches/03-incorrect.stories.tsx

**Correct 2 (보일 때까지 `waitFor` 안에서 단언합니다):**

<<< ../examples/component-assert-the-state-each-play-reaches/04-correct.stories.tsx
