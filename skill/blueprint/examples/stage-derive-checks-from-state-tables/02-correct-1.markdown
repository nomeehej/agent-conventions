## Orders table

| ID | State | Shows |
| --- | --- | --- |
| ORD-011 | 대기 | 행 skeleton 8줄 |
| ORD-012 | 빈 결과 | 안내와 초기화 버튼 |
| ORD-013 | 오류 | 표 칸 경계의 다시 시도 |

## Remaining

| Stage | Work | Blocker | Check | Status |
| --- | --- | --- | --- | --- |
| 2 | 주문 표 | — | `npx playwright test --project=integration --grep 'ORD-01[1-3]'` | Ready |
