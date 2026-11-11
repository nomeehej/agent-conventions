---
title: Collect Only Component Stories and Keep Only the Addons in Use
titleKo: Storybook은 부품 story만 모으고 쓰는 addon만 둡니다
impact: HIGH
impactDescription: CLI가 만든 예제 story, MDX, 쓰지 않는 addon이 사이드바와 빌드, 테스트 수에 섞이지 않습니다
appliesWhen:
  - `.storybook/main.ts`의 `stories`, `addons`, `framework`, `core`를 추가하거나 바꿀 때
  - Storybook 패키지나 addon을 설치, 업그레이드하거나 `storybook init`, `storybook add`를 실행할 때
reviewWith: testing/component-fail-stories-on-accessibility-violations
tags: setup, config, addons, versions
---

## Collect Only Component Stories and Keep Only the Addons in Use

**Impact: HIGH (CLI가 만든 예제 story, MDX, 쓰지 않는 addon이 사이드바와 빌드, 테스트 수에 섞이지 않습니다)**

`stories`는 `src/component/**/*.stories.tsx` 하나만 두고 CLI가 만든 예제 폴더와 MDX는 지웁니다.
addon은 아래 셋만 두고 패키지 버전은 범위 없이 고정합니다.

| 설정 | 값 |
| --- | --- |
| `stories` | `../src/component/**/*.stories.tsx`. story는 `ui`, `widget`에만 둡니다 |
| `addons` | `@storybook/addon-designs`(design 링크), `@storybook/addon-vitest`(story 테스트), `@storybook/addon-a11y`(접근성 검사) |
| `core.disableTelemetry` | `true`로 두어 사용 통계를 보내지 않습니다 |
| `storybook`, `@storybook/react-vite`, 공식 addon | 모두 같은 버전을 `^` 없이 적습니다 |
| CLI가 적은 `playwright: "latest"` | `@playwright/test`와 같은 버전으로 고정합니다 |
| CLI가 더한 `@storybook/addon-docs`, `@chromatic-com/storybook`, `@storybook/addon-onboarding` | 지웁니다. 문서 페이지를 두지 않는 이유는 `docs-leave-usage-guidance-to-the-figma-library`가 정합니다 |

참고: [Storybook 문서: telemetry 끄기](https://storybook.js.org/docs/configure/telemetry),
[Storybook 문서: Vitest addon](https://storybook.js.org/docs/writing-tests/integrations/vitest-addon).

**Incorrect 1 (CLI가 만든 MDX와 예제 경로, 쓰지 않는 addon을 그대로 둡니다):**

<<< ../examples/setup-collect-only-component-stories/01-incorrect.ts

**Correct 1 (부품 story만 모으고 쓰는 addon 셋과 telemetry 끄기만 둡니다):**

<<< ../examples/setup-collect-only-component-stories/02-correct.ts

**Incorrect 2 (Storybook 패키지 버전이 범위로 갈리고 CLI가 적은 `latest`가 남습니다):**

<<< ../examples/setup-collect-only-component-stories/03-incorrect.json

**Correct 2 (Storybook 패키지를 한 버전으로, Playwright를 테스트 러너와 같은 버전으로 고정합니다):**

<<< ../examples/setup-collect-only-component-stories/04-correct.json
