:::details[Q1 환불 주문을 목록에 포함하나요? Needs answer]
<a id="q1"></a>

| To | Blocks | Where |
| --- | --- | --- |
| 기획 | Plan 2단계 | [Orders table](#orders-table) › 환불 행 |

| Option | Answer | FE change |
| --- | --- | --- |
| A ![FE 추천](../img/star.svg) | 포함. 상태 칩 `환불`로 구분 | 칩 하나 |
| B | 제외. 환불 탭을 따로 둠 | 탭과 조회 하나 |

- Now = 포함. A 꼴로 구현 중
- Why = 데모 3이 포함. 칩 하나가 탭 하나보다 작음
- Evidence = [Figma 10-02 표](https://www.figma.com/design/Ab12Cd34Ef56Gh78Ij90Kl/admin?node-id=12-344), 데모 `orders-demo (3).html`
:::
