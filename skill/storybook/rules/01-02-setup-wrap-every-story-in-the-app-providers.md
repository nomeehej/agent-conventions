---
title: Wrap Every Story in the App Providers from One Preview Decorator
titleKo: 모든 story는 preview 데코레이터 하나로 앱 provider 안에서 렌더합니다
impact: HIGH
impactDescription: 테마, 글꼴, 전역 CSS가 앱과 같아 story에서 본 모습이 화면에서 본 모습과 같습니다
appliesWhen:
  - `.storybook/preview.tsx`의 데코레이터, 전역 CSS, `parameters.layout`을 추가하거나 바꿀 때
  - story나 meta에 provider를 감싸는 데코레이터를 넣으려 할 때
tags: setup, preview, providers, decorators
---

## Wrap Every Story in the App Providers from One Preview Decorator

**Impact: HIGH (테마, 글꼴, 전역 CSS가 앱과 같아 story에서 본 모습이 화면에서 본 모습과 같습니다)**

`.storybook/preview.tsx`의 데코레이터 하나가 앱 진입점과 같은 `AppProviders`로 모든 story를 감쌉니다.
전역 CSS와 글꼴도 앱 진입점이 가져오는 파일을 preview에서 한 번 가져오고 story와 meta는 provider를 다시 감싸지 않습니다.

| 설정 | 값 |
| --- | --- |
| 데코레이터 | `AppProviders` 하나. story만 쓰는 테마나 provider 조합을 따로 만들지 않습니다 |
| 전역 CSS, 글꼴 | 앱 진입점이 가져오는 파일과 같은 파일입니다 |
| `parameters.layout` | `centered`로 둡니다. 부모 폭을 채우는 부품만 meta에서 `padded`로 바꿉니다 |

부모 폭과 문맥을 재현하는 데코레이터는 `story-reproduce-parent-context-with-copied-values`가 정합니다.

참고: [Storybook 문서: 전역 데코레이터](https://storybook.js.org/docs/writing-stories/decorators#global-decorators),
[Storybook 문서: story 배치](https://storybook.js.org/docs/configure/story-layout).

**Incorrect 1 (story마다 provider 일부를 따로 감싸 앱과 다른 테마로 렌더합니다):**

<<< ../examples/setup-wrap-every-story-in-the-app-providers/01-incorrect.stories.tsx

**Correct 1 (preview 데코레이터 하나가 앱과 같은 provider와 전역 CSS로 모든 story를 감쌉니다):**

<<< ../examples/setup-wrap-every-story-in-the-app-providers/02-correct.tsx
