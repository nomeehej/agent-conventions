---
title: Share Fixtures and Page Objects at Real Boundaries
titleKo: 공통 준비와 반복되는 화면 조작만 추출합니다
impact: MEDIUM
impactDescription: 테스트의 핵심 시나리오를 숨기지 않고 중복되는 준비와 탐색을 줄입니다
appliesWhen:
  - Playwright fixture, page object, 공통 준비 helper를 만들거나 공유 범위를 바꿀 때
tags: testing, playwright
---

## Share Fixtures and Page Objects at Real Boundaries

**Impact: MEDIUM (테스트의 핵심 시나리오를 숨기지 않고 중복되는 준비와 탐색을 줄입니다)**

공통 세션과 자원 수명은 fixture로, 반복되는 locator와 화면 조작은 소유 화면의 page object로 묶습니다.
한 번 쓰는 단언이나 작은 동작마다 helper를 만들지 않습니다.

```mermaid
flowchart LR
	q1{"세션이나 자원 수명을<br>여러 테스트가 공유하는가?"} -- 예 --> r1("fixture")
	q1 -- 아니요 --> q2{"여러 테스트가 같은 locator와<br>조작을 반복하는가?"} -- 예 --> r2("소유 화면의 page object")
	q2 -- 아니요 --> r3("테스트 안에 그대로")
```

page object는 시나리오의 기대값을 숨기지 않고 테스트가 결과를 단언하게 합니다.
fixture의 의존성 이름과 scope는 실제 사용 범위에 맞추고 테스트별 상태를 worker 전역으로 올리지 않습니다.
fixture 콜백의 매개변수 구조분해는 `typescript/values-read-objects-through-chains`의 예외를 따릅니다.

참고: [공식 문서](https://playwright.dev/docs/test-fixtures).

**Incorrect 1 (테스트마다 같은 화면의 locator 체인을 반복합니다):**

<<< ../examples/playwright-share-fixtures-and-page-objects-at-real-boundaries/01-incorrect.test.ts

**Correct 1 (반복되는 화면 탐색을 page object fixture로 공유합니다):**

<<< ../examples/playwright-share-fixtures-and-page-objects-at-real-boundaries/02-correct.test.ts
