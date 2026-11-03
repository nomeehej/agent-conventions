## Plan

구현 순서와 단계마다 확인 방법. Depends on = 그 단계가 기다리는 열린 질문.

| Stage | Work | Depends on | Check | Status |
| --- | --- | --- | --- | --- |
| 0 | 준비. `UiPopover` 승격 | — | `npx tsc -b` | Done 2026-10-03 |
| 1 | 조건 패널 | — | `npm run test:integration -- orders` | Ready |
| 2 | 주문 표 | [Q1](#q1) | `npm run test:integration -- orders` | Blocked |
| 3 | 연동. 환불 금액 필드 | — | `npm run kubb:generate && npx tsc -b` | Waiting on BE |
| 4 | 검증. e2e와 캡처 대조 | 2, 3 | `npm run test:e2e -- orders` | Blocked |

열린 질문 2. 막는 것 = 2단계 → [Questions](#questions)
