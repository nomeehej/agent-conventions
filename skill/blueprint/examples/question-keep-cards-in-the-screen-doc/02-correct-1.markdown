## Questions

열린 것 1개, 풀린 것 1개. 줄을 누르면 카드가 열림.

:::details[Q1 환불 주문을 목록에 포함하나요? Needs answer]
<a id="q1"></a>

| To | Blocks | Where |
| --- | --- | --- |
| 기획 | Plan 2단계 | [Orders table](#orders-table) › 환불 행 |

| Option | Answer | FE change |
| --- | --- | --- |
| A ![FE 추천](../img/star.svg) | 포함. 상태 칩 `환불`로 구분 | 칩 하나 |
| B | 제외. 환불 탭을 따로 둠 | 탭과 조회 하나 |

- Why = 데모 3이 포함. 칩 하나가 탭 하나보다 작음
:::

:::details[D2 조건 설정 = 모달 아닌 팝오버 Dev decision 2026-10-02]
<a id="d2"></a>

| Asked | Answer |
| --- | --- |
| 조건 설정을 띄우는 꼴 | 버튼에 붙는 팝오버. 표를 가리지 않음 |
:::
