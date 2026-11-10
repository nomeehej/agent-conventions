| # | Part | Rule | Figma |
| --- | --- | --- | --- |
| 1 | 조건 팝오버 | 폭 300 급, 버튼 오른쪽 아래. 안쪽 치수 = `ui/popover` 기본값 | [![](../img/figma.svg) 12:350](https://www.figma.com/design/Ab12Cd34Ef56Gh78Ij90Kl/admin?node-id=12-350) |

### Mock

| API | Response | File |
| --- | --- | --- |
| `/api/orders` | BE 전 = Kubb 생성기 위 상태 섞인 20건 | `mock-orders.ts` |

| Case | API | Override | Check |
| --- | --- | --- | --- |
| 주문 없음 | `/api/orders` | `items` = `[]` | [ORD-012](#test-ord-012) |
