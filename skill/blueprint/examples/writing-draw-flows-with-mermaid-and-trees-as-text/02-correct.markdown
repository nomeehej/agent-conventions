```mermaid
flowchart LR
	draft("입력 중") -->|적용| applied("조회 조건") --> table("표")
```

```text [src/page/orders/]
├── orders-page.tsx          // 진입. 조건과 표를 조립
├── _condition-popover.tsx   // 조건 칸, 적용, 초기화
└── _orders-table.tsx        // 표, 페이지. 이번에 바뀜
```
