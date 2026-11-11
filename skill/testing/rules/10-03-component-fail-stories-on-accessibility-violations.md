---
title: Fail Stories on Accessibility Violations
titleKo: 접근성 위반은 story 테스트를 실패시킵니다
impact: HIGH
impactDescription: 이름 없는 dialog, label 없는 입력, 부족한 색 대비가 부품 단계에서 테스트 실패로 드러납니다
appliesWhen:
  - `.storybook/preview`나 story의 `parameters.a11y` 설정을 추가하거나 바꿀 때
  - story 테스트가 접근성 위반으로 실패해 예외를 두거나 설정 등급을 바꿀 때
tags: testing, component, accessibility
---

## Fail Stories on Accessibility Violations

**Impact: HIGH (이름 없는 dialog, label 없는 입력, 부족한 색 대비가 부품 단계에서 테스트 실패로 드러납니다)**

`addon-a11y`와 Vitest addon을 함께 쓰면 story마다 axe로 접근성을 검사합니다.
`parameters.a11y.test`가 위반의 처리를 정합니다.
`"error"`는 위반을 테스트 실패로 올리고 `"todo"`는 Storybook 화면에 경고로만 남깁니다.
`"off"`는 검사하지 않으므로 쓰지 않습니다.
설정은 `.storybook/preview`에 한 번 두고 story마다 반복하지 않습니다.

| 프로젝트 | 설정 |
| --- | --- |
| 새 프로젝트 | 첫 story부터 preview에 `"error"`를 둡니다 |
| 기존 프로젝트 | preview에 `"todo"`로 켜서 위반 목록을 보고 고친 뒤 `"error"`로 올립니다 |
| 당장 고칠 수 없는 위반 | 그 story의 `parameters.a11y.test`만 `"todo"`로 두고 이유 한 줄을 적습니다. 고치면 지웁니다 |

처음 켜면 이름 없는 MUI dialog, label 없는 checkbox, 4.5:1에 못 미치는 글자색 같은 실제 결함이 한꺼번에 드러납니다.
위반은 story가 아니라 부품이나 토큰에서 고칩니다.

참고: [Storybook 문서: Accessibility tests](https://storybook.js.org/docs/writing-tests/accessibility-testing).

**Incorrect 1 (preview가 `"todo"`라 위반이 경고로만 남습니다):**

<<< ../examples/component-fail-stories-on-accessibility-violations/01-incorrect.tsx

**Correct 1 (preview에서 `"error"`로 위반을 테스트 실패로 올립니다):**

<<< ../examples/component-fail-stories-on-accessibility-violations/02-correct.tsx

**Incorrect 2 (고치지 않고 story의 접근성 검사를 끕니다):**

<<< ../examples/component-fail-stories-on-accessibility-violations/03-incorrect.stories.tsx

**Correct 2 (그 story만 `"todo"`로 두고 이유를 적습니다):**

<<< ../examples/component-fail-stories-on-accessibility-violations/04-correct.stories.tsx
