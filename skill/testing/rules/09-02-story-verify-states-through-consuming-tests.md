---
title: Verify Story States through Consuming Tests
titleKo: Story를 mount하는 테스트에서 행동과 결과를 검증합니다
impact: HIGH
impactDescription: 재현용 표본과 자동 검증을 연결하고 실행되지 않은 상태를 통과로 오인하지 않습니다
appliesWhen:
  - story를 mount하는 integration spec, gallery 실행 설정, 상태별 자동 단언을 만들거나 바꿀 때
reviewWith: story-compose-owned-state-with-real-providers
tags: testing, story, integration, playwright
---

## Verify Story States through Consuming Tests

**Impact: HIGH (재현용 표본과 자동 검증을 연결하고 실행되지 않은 상태를 통과로 오인하지 않습니다)**

story 파일이 있다는 이유로 자동화 integration 테스트가 있다고 보고하지 않습니다.
러너가 수집하는 spec에서 story를 `mount`하고 관찰 가능한 결과를 단언해야 검증됩니다.
실제 provider, 응답 처리와 구역 안의 조작을 함께 실행하는 소비 경계를 기록합니다.

### 작성과 실행 순서

1. 구역의 대기, 빈 결과, 오류, 성공 중 변경 계약에 필요한 상태를 고릅니다.
   설계 문서의 상태 표가 있으면 그 줄을 그대로 씁니다.
2. 공유 handler 목록을 fixture에 연결하고 덮어쓰기 handler를 요청 시작 전에 등록합니다.
3. 초기 props와 라우트가 있는 story를 `mount`하고 반환된 locator로 범위를 좁힙니다.
   Playwright 1.62부터 내장 `mount`는 `baseURL`의 gallery를 열고 `#root` locator를 돌려줍니다.
4. GIVEN, WHEN, THEN으로 준비, 행동, 결과를 설명하고 DOM, URL, 파일 결과를 단언합니다.
5. gallery를 포함한 테스트 빌드, 수집 목록과 그 spec의 실제 실행을 확인합니다.

gallery의 `baseURL`과 앱 E2E의 `baseURL`, 두 project의 수집 패턴을 구분합니다.
브라우저 mock의 가로채기 경계는 `network-share-handlers-across-browser-and-node`를 따릅니다.
실패한 story 로드와 렌더가 `mount` 성공으로 숨지 않게 하고 fixture가 종료 자원을 정리합니다.

### 상태와 여정의 분담

구역의 상태 조합은 integration에서, 실제 앱 진입과 화면 연결은 E2E에서 확인합니다.
story에 넣은 router만으로 production 라우트 등록과 앱 초기화까지 검증했다고 하지 않습니다.
callback 결과는 브라우저에서 기록한 값을 읽고 픽셀 결과는 별도 시각 비교 사례로 둡니다.
수집 목록과 실행 결과의 구분은 `verification-report-failures-flakes-and-executed-scope`를 따릅니다.

참고: [Playwright 문서: story를 mount하는 컴포넌트 테스트](https://playwright.dev/docs/test-components).

**Incorrect 1 (story가 그려졌다는 사실만 확인합니다):**

<<< ../examples/story-verify-states-through-consuming-tests/01-incorrect.test.ts

**Correct 1 (빈 응답을 등록하고 실제 화면의 상태를 확인합니다):**

<<< ../examples/story-verify-states-through-consuming-tests/02-correct.test.ts

**Correct (콜백 결과는 브라우저 story의 상태로 기록하고 테스트에서 읽습니다):**

<<< ../examples/story-verify-states-through-consuming-tests/03-correct.story.tsx
<<< ../examples/story-verify-states-through-consuming-tests/04-correct.test.ts

**Correct (gallery와 앱의 수집 범위와 service worker 처리를 분리합니다):**

<<< ../examples/story-verify-states-through-consuming-tests/05-correct.config.ts
