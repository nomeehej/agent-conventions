---
title: Build Storybook and Run Story Tests Before Reporting
titleKo: 마무리 전에 Storybook을 빌드하고 story 테스트를 돌려 숫자로 보고합니다
impact: HIGH
impactDescription: 개발 서버에서만 렌더되는 story, 실행되지 않은 테스트, 빠진 design 링크를 완료 보고 전에 잡습니다
appliesWhen:
  - story, `.storybook/` 설정, design 링크 작업을 마무리하거나 완료로 보고할 때
requiredOnCompletion: true
tags: verify, build, test, report
---

## Build Storybook and Run Story Tests Before Reporting

**Impact: HIGH (개발 서버에서만 렌더되는 story, 실행되지 않은 테스트, 빠진 design 링크를 완료 보고 전에 잡습니다)**

`storybook build`가 성공하고 `vitest --project=storybook`이 실패 없이 끝나야 완료로 보고합니다.
보고에는 아래 항목을 숫자로 적고 개발 서버에서 눈으로 본 결과로 대신하지 않습니다.

| 항목 | 적을 것 |
| --- | --- |
| `storybook build` | 성공 여부를 적습니다 |
| `vitest --project=storybook` | 실행, 통과, 실패 수를 적습니다. 바꾼 story 파일의 story가 실행 목록에 있는지 확인합니다 |
| design 링크 | `parameters.design`이 없는 story 수를 적습니다. `코드에만 있음` 부품은 이름과 함께 따로 셉니다 |

참고: [Storybook 문서: CI 실행](https://storybook.js.org/docs/writing-tests/integrations/vitest-addon#in-ci),
[Storybook 문서: 정적 빌드](https://storybook.js.org/docs/sharing/publish-storybook).

**Incorrect 1 (개발 서버에서 본 인상으로 완료를 보고합니다):**

<<< ../examples/verify-build-storybook-and-run-story-tests/01-incorrect.txt

**Correct 1 (빌드, 테스트 실행 수, 빠진 링크를 숫자로 보고합니다):**

<<< ../examples/verify-build-storybook-and-run-story-tests/02-correct.txt
