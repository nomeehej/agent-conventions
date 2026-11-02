---
title: Share Handlers across Browser and Node
titleKo: 같은 handler를 브라우저와 Node의 단일 응답 경계로 연결합니다
impact: HIGH
impactDescription: 실행 환경에 따라 정상 데이터와 handler 우선순위가 달라지는 문제를 막습니다
appliesWhen:
  - MSW worker나 page.route의 getResponse 연결, 덮어쓰기 fixture의 handler 공유와 우선순위를 만들거나 바꿀 때
requiresSelected: network-detect-unhandled-api-requests, data-isolate-and-restore-test-state
tags: testing, network, msw, playwright
---

## Share Handlers across Browser and Node

**Impact: HIGH (실행 환경에 따라 정상 데이터와 handler 우선순위가 달라지는 문제를 막습니다)**

브라우저 mock과 Node 테스트는 같은 공유 handler 목록을 가져옵니다.
응답 본문을 환경마다 복사하지 않고 어느 실행 경로가 요청을 처리하는지 하나로 정합니다.

| 소비 환경 | 연결 방식 |
| --- | --- |
| 개발, mock 앱 E2E | mock 모드에서 `setupWorker`에 공유 handler 목록을 연결합니다 |
| Node 함수 integration | `setupServer`에 같은 공유 handler 목록을 연결합니다 |
| 브라우저 story integration | service worker를 차단하고 `page.route` 콜백에서 `getResponse`로 공유 handler 목록을 해석합니다 |

`page.route` 콜백은 메서드, URL, 헤더, 요청 본문과 응답 상태, 헤더, 본문을 보존합니다.
cookie를 생략하는 `headers` 대신 `allHeaders`를 사용하고 상대 handler의 `baseUrl`도 맞춥니다.
여러 `Set-Cookie`는 `getSetCookie`로 읽고 줄바꿈으로 이어 전달합니다.
`route.fulfill`이 줄바꿈으로 나누는 동작은 문서에 없으므로 설치 버전에서 확인합니다.
처리되지 않은 API 요청은 실패로 연결하고 실제 호출 허용 목록만 통과시킵니다.
`passthrough`를 무조건 네트워크로 보내지 않고 프로젝트의 실제 호출 계약을 확인합니다.
MSW 2.x 기준입니다. 3.x는 `onUnhandledFrame`과 `{ frame, defaults }` 콜백을 씁니다.

덮어쓰기 handler는 공유 handler보다 먼저 해석하고 요청 시작 전에 등록합니다.
테스트별 handler 목록과 가로채기는 테스트마다 만들고 종료 시 해제합니다.
배열 복사는 handler 인스턴스의 상태를 초기화하지 않으므로 공유 handler 목록은 상태 없는 반복 응답으로 한정합니다.
`once`, generator, 변경 가능한 저장소가 필요하면 테스트마다 factory에서 새 인스턴스를 만듭니다.

참고: [MSW getResponse](https://mswjs.io/api/get-response),
[Playwright의 service worker와 네트워크](https://playwright.dev/docs/network),
[Playwright 응답 읽기의 다중 cookie 표기](https://playwright.dev/docs/api/class-response#response-header-value).

**Incorrect 1 (Node의 공유 handler 목록과 별개인 목록을 브라우저에서 다시 작성합니다):**

<<< ../examples/network-share-handlers-across-browser-and-node/01-incorrect.ts

**Correct 1 (공유 handler 목록을 mock 모드의 MSW worker에 연결합니다):**

<<< ../examples/network-share-handlers-across-browser-and-node/02-correct.ts

**Correct (`page.route` 콜백이 요청과 응답을 보존하고 미처리 API를 거부합니다):**

<<< ../examples/network-share-handlers-across-browser-and-node/03-correct.ts

**Correct (fixture가 테스트별 우선순위와 가로채기 수명을 소유합니다):**

<<< ../examples/network-share-handlers-across-browser-and-node/04-correct.ts
