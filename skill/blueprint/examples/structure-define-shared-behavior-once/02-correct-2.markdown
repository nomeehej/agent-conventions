## Rules

이 화면이 지키는 규칙.

| Rule | Detail | Code |
| --- | --- | --- |
| 정렬 | 11열 중 9열. [서버 정렬, 오름 → 내림 → 없음. 다른 열은 그 열 오름](../shared.md#toNextSortParams) | `toNextSortParams` |
| 행 누름 | [행 어디를 눌러도 상세, 행 안의 버튼과 링크는 제외](../shared.md#isInsideInteractiveElement). 주문 상세 `orders/:orderId` | `isInsideInteractiveElement` |
| 환불 금액 | 음수 없음. 0 = `-` | `_function/to-refund-cell.ts` |
