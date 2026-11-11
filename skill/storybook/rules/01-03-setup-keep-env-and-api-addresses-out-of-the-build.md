---
title: Keep Env Files and API Addresses Out of the Storybook Build
titleKo: Storybook 빌드에는 env 파일과 API 주소를 싣지 않습니다
impact: HIGH
impactDescription: 공유하는 정적 빌드에 내부 주소가 새지 않고 앱 빌드 설정이 바뀌어도 story 빌드가 깨지지 않습니다
appliesWhen:
  - `.storybook/vite.config.ts`, `viteFinal`, `framework.options.builder` 설정을 추가하거나 바꿀 때
  - `.storybook/preview.tsx`에서 모듈을 대체하거나 story에 env 값, API 주소를 넘기려 할 때
tags: setup, vite, env, mock
---

## Keep Env Files and API Addresses Out of the Storybook Build

**Impact: HIGH (공유하는 정적 빌드에 내부 주소가 새지 않고 앱 빌드 설정이 바뀌어도 story 빌드가 깨지지 않습니다)**

Storybook은 따로 정하지 않으면 루트 `vite.config.ts`를 읽고 env 파일 값은 빌드 결과에 그대로 박힙니다.
`framework.options.builder.viteConfigPath`로 Storybook 전용 vite 설정을 가리킵니다.
그 설정에는 부품 렌더에 필요한 별칭과 플러그인만 둡니다.

| 자리 | 처리 |
| --- | --- |
| `@/` 별칭, SVG 같은 렌더 플러그인 | Storybook 전용 vite 설정에 둡니다 |
| `envDir`, `loadEnv`, API 주소, 프록시 | 싣지 않습니다. `ui`, `widget`은 서버를 부르지 않습니다 |
| 모듈 대체 | `.storybook/preview.tsx`의 `sb.mock`에서만 등록합니다. 경로는 preview 기준 상대 경로와 확장자이고 `@/` 별칭은 받지 않습니다 |
| CLI가 이 파일에 넣은 Vitest `storybook` project | 루트 vite 설정의 `test.projects`로 옮깁니다. Vitest는 이 파일을 읽지 않고 project 자리는 `testing/scope-place-tests-by-owner-and-separate-runner-globs`가 정합니다 |

참고: [Storybook 문서: Vite 설정](https://storybook.js.org/docs/builders/vite#override-the-default-configuration),
[Storybook 문서: 환경 변수](https://storybook.js.org/docs/configure/environment-variables),
[Storybook 문서: mock 모듈](https://storybook.js.org/docs/writing-stories/mocking-data-and-modules/mocking-modules).

**Incorrect 1 (env 폴더와 API 프록시를 Storybook 빌드 설정에 싣습니다):**

<<< ../examples/setup-keep-env-and-api-addresses-out-of-the-build/01-incorrect.ts

**Correct 1 (Storybook 전용 설정에 별칭만 두고 `main.ts`가 그 파일을 가리킵니다):**

<<< ../examples/setup-keep-env-and-api-addresses-out-of-the-build/02-correct-1.ts

<<< ../examples/setup-keep-env-and-api-addresses-out-of-the-build/02-correct-2.ts

**Correct (모듈 대체는 preview에서 상대 경로로 등록하고 값은 story가 정합니다):**

<<< ../examples/setup-keep-env-and-api-addresses-out-of-the-build/03-correct.tsx
