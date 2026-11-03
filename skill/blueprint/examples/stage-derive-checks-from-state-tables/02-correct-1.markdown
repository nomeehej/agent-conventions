## Plan

| Stage | Work | Depends on | Check | Status |
| --- | --- | --- | --- | --- |
| 2 | 주문 표 | — | `npx playwright test --project=integration --grep 'ORD-01[23]'` | Ready |

## Loading, empty and errors

| Region | 대기 | 빈 값 | 실패 | Check |
| --- | --- | --- | --- | --- |
| [Orders table](#orders-table) | 대기 행 8줄 | 안내와 초기화 버튼 | 표 자리만 다시 시도 | [ORD-012](#test-ord-012)<br>[ORD-013](#test-ord-013) |

### Mock

| Case | API | 덮는 값 | Check |
| --- | --- | --- | --- |
| 주문 없음 | `/api/orders` | `items` = `[]` | [ORD-012](#test-ord-012) |
| 목록 오류 | `/api/orders` | 500 | [ORD-013](#test-ord-013) |

## Scenarios

| ID | Region | Scenario | Tag | Layer |
| --- | --- | --- | --- | --- |
| <a id="test-ord-012"></a>ORD-012 | [Orders table](#orders-table) | 주문이 없으면 안내와 초기화 버튼이 표시된다 | mid<br>negative | integration |
| <a id="test-ord-013"></a>ORD-013 | [Loading, empty and errors](#loading-empty-and-errors) | 목록 조회가 500이면 표 자리만 다시 시도가 표시된다 | mid<br>negative | integration |
