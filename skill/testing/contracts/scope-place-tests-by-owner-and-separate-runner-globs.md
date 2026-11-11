# Place Tests by Owner and Separate Runner Globs

**Impact: MEDIUM (테스트 위치를 예측할 수 있고 다른 러너의 파일이 잘못 실행되지 않습니다)**

함수 테스트는 대상 함수 가까이에, 화면과 여정 테스트는 소유 화면을 찾기 쉬운 위치에 둡니다.
여러 러너가 있으면 파일 이름과 수집 패턴을 함께 정해 서로의 테스트를 실행하지 않게 합니다.

| 파일 | 배치 기준 |
| --- | --- |
| 함수 테스트 | 대상 소유자 가까이(`src/**/*.test.ts`)에 둡니다 |
| 골든 기준값 테스트 | 함수 테스트와 수집 project를 나누려고 `test/_golden/`에 모읍니다 |
| 부품 story | 부품 옆(`<부품>.stories.tsx`)에 둡니다. Vitest `storybook` project가 수집합니다 |
| 화면, 앱 여정, gallery story | 프로젝트에 구조가 없으면 `test/<화면>/<화면>.integration.spec.ts`, `<화면>.e2e.spec.ts`, `<화면>.story.tsx`로 둡니다 |
| fixture, page object | 여러 테스트가 쓰므로 `test/_fixture/`에 모읍니다 |

`storybook` project는 루트 vite 설정의 `test.projects`에 unit, golden과 나란히 둡니다.
`.storybook/vite.config.ts`에 두면 Vitest가 읽지 않습니다.
그 project는 `extends: true`로 루트 vite 설정을 물려받습니다.
루트 `test` 설정도 물려받으므로 unit 전용 `setupFiles`, `environment`는 unit project 안에 둡니다.
스크립트는 `--project`로 골라 둡니다.
`--project` 없는 `vitest run`은 브라우저 project까지 함께 실행합니다.

폴더 번호, 케이스 ID, 별칭, 실제 폴더 이름은 프로젝트 문서가 정합니다.
단순 이동을 이유로 무관한 테스트와 프로덕션 파일을 재배치하지 않습니다.

참고: [Vitest 문서: 테스트 파일 배치](https://vitest.dev/guide/learn/testing-in-practice#file-layout),
[Vitest 문서: project별 설정과 수집 패턴](https://vitest.dev/guide/projects),
[Playwright 문서: project의 testMatch와 testIgnore](https://playwright.dev/docs/test-projects),
[Storybook 문서: Vitest addon](https://storybook.js.org/docs/writing-tests/integrations/vitest-addon).

**Incorrect 1 (역할이 섞여 어떤 러너가 읽는지 알기 어렵습니다):**

```txt
test/
  format-quantity.spec.ts
  reports.spec.ts
  helpers.spec.ts

Vitest include: test/**/*.spec.ts
Playwright testMatch: test/**/*.spec.ts
```

**Correct 1 (파일 위치와 수집 범위를 함께 정합니다):**

```txt
src/util/number/format-quantity.test.ts
src/service/msw/handlers.test.ts
src/component/ui/date-picker/date-picker.stories.tsx
test/_golden/order-rows.test.ts
test/reports/reports.integration.spec.ts
test/reports/reports.e2e.spec.ts
test/reports/reports.story.tsx
test/_fixture/reports-page.ts

Vitest projects(루트 vite.config.ts의 test.projects): unit src/**/*.test.ts, golden test/_golden/**/*.test.ts, storybook src/component/**/*.stories.tsx
Vitest scripts: test:unit vitest run --project unit, test:component vitest run --project storybook
Playwright testMatch: test/**/*.integration.spec.ts, test/**/*.e2e.spec.ts
```

> 나머지 예시와 예외는 [full rule](../rules/01-03-scope-place-tests-by-owner-and-separate-runner-globs.md)에 있습니다.
