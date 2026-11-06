---
name: Overview
label: 관리자 콘솔 지도. 화면, 라우트, API 정답, 재료, 규약
group: Project
order: 10
created: 2026-10-02
---

화면 둘. 둘 다 설계 중.

## Overview

| Screen | Route | Doc | Status |
| --- | --- | --- | --- |
| 주문 목록 | `orders` | [Orders list](screen/orders.md) | Design |
| 고객 상세 | `customers/:customerId` | [Customer detail](screen/customer-detail.md) | Design |

- 열린 질문 2. 기획 1, BE 1 → [Questions](questions.md)

## Routes

```text [src/routes.tsx]
admin/
└── RootOutlet                    // 인증, 공통 틀
    ├── orders
    └── customers/:customerId
```

- 목록과 상세 사이 이동 약속 = [Shared Navigation](shared.md#navigation)

## Data and API

- spec `openapi.json` 10-01, `npm run kubb:generate`
- endpoint 9. 앱이 부르는 것 7, 관리 전용 2

## Tests

```text [test/]
├── 1-orders/               // 주문 목록. integration, e2e
└── 2-customer-detail/      // 고객 상세
```

## Materials

| Source | Truth for | Where |
| --- | --- | --- |
| Figma 10-02 | 모양, 배치, 문구, 색, 표기 | 구역 절, 그림 |
| 데모 `orders-demo (3).html` 09-30 | 기능, 데이터, 계산 | 구역 절 |
| `openapi.json` 10-01 | endpoint, 필드 이름과 타입 | Data and API |

## Conventions

- `convention-react`, `convention-css`, `convention-typescript`, `convention-testing`
- 예외: 대기 자리 높이는 구역 컨테이너의 `min-height`

## Known gaps

- 없음

## Site

- `npm run docs:dev`, `npm run docs:build`
- 주소: 사내 정적 호스트 `/admin-console-docs/`
