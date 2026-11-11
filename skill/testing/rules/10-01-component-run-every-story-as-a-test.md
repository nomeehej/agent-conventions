---
title: Run Every Story as a Test
titleKo: 모든 story를 테스트로 실행하고 돌 수 없는 story만 이유와 함께 뺍니다
impact: HIGH
impactDescription: 부품의 상태가 하나씩 테스트를 거치고 빠진 story의 수와 이유가 남습니다
appliesWhen:
  - 부품 옆 `*.stories.tsx`에 story를 추가하거나 `tags`로 테스트에서 뺄 때
  - Vitest `storybook` project의 수집 범위나 story 테스트 결과를 정할 때
  - 제외: gallery story(`*.story.tsx`)만 바꾸는 경우
tags: testing, component, story
---

## Run Every Story as a Test

**Impact: HIGH (부품의 상태가 하나씩 테스트를 거치고 빠진 story의 수와 이유가 남습니다)**

부품 옆 `*.stories.tsx`의 모든 story는 Storybook Vitest addon에서 테스트로 실행합니다.
`test` 태그가 기본으로 붙어 story마다 렌더 테스트가 되고 `play`가 있으면 렌더 뒤에 함께 실행됩니다.
story 테스트는 `vitest run --project storybook`으로 실행합니다.

| 상황 | 처리 |
| --- | --- |
| 렌더와 `play`가 돈다 | 태그를 달지 않습니다 |
| 실패한다 | story나 부품을 고칩니다. `!test`로 가리지 않습니다 |
| 테스트 브라우저에 없는 장치나 외부 시스템이 필요하다 | 그 story에만 `tags: ["!test"]`와 이유 한 줄을 둡니다. meta에는 달지 않습니다 |

결과를 보고할 때는 수집한 story 수, 실행한 테스트 수, `!test`로 뺀 story 수와 이유를 함께 적습니다.
수집한 수에서 뺀 수를 빼면 실행한 수와 같아야 하고 어긋나면 돌지 않은 story를 찾습니다.
수집 수와 실행 수의 구분은 `verification-report-failures-flakes-and-executed-scope`를 따릅니다.

참고: [Storybook 문서: Vitest addon](https://storybook.js.org/docs/writing-tests/integrations/vitest-addon).

**Incorrect 1 (달력을 여는 story를 이유 없이 테스트에서 뺍니다):**

<<< ../examples/component-run-every-story-as-a-test/01-incorrect.stories.tsx

**Correct 1 (태그 없이 두어 렌더와 `play`가 테스트로 실행됩니다):**

<<< ../examples/component-run-every-story-as-a-test/02-correct.stories.tsx

**Correct (카메라가 필요한 story만 이유와 함께 뺍니다):**

<<< ../examples/component-run-every-story-as-a-test/03-correct.stories.tsx
