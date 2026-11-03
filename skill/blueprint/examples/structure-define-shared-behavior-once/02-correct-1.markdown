두 화면 이상이 같이 쓰는 동작을 한 번만 정하는 곳.

| Group | 같이 쓰는 화면 | 무엇 |
| --- | --- | --- |
| [Lists](#lists) | 주문 목록, 고객 목록 | 정렬, 페이지, 행 누름, 빈 값 |
| [Navigation](#navigation) | 목록 2개, 상세 2개 | 상세로 가고 돌아오는 약속 |

## Lists

| What | Rule | Code |
| --- | --- | --- |
| <a id="toNextSortParams"></a>정렬 | 서버 정렬. 없음 → 오름 → 내림 → 없음. 다른 열을 누르면 그 열 오름 | `toNextSortParams` |
| <a id="isInsideInteractiveElement"></a>행 누름 | 행 어디를 눌러도 상세로. 행 안의 버튼, 링크를 누른 것은 이동 아님 | `isInsideInteractiveElement` |
| <a id="copy_empty_value_text"></a>빈 값 | 값 없는 칸 `-` | `copy_empty_value_text` |
