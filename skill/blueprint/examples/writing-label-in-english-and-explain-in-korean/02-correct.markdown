:::details[Q1 환불 주문을 목록에 포함하나요? Waiting on plan]
<a id="q1"></a>

| To | Blocks | Where |
| --- | --- | --- |
| 기획 | Plan 2단계 | [Orders table](#orders-table) › 환불 행 |

- Ask = 운영에서 환불 건을 같은 목록에서 보나요?
- Now = 포함으로 구현 중
:::

```ts
// for-humanity.config.ts
export default {
	status: [
		{phrase: "Needs answer", kind: "unverified"},
		{phrase: "Waiting on BE", kind: "unverified"},
		{phrase: "Waiting on plan", kind: "unverified"},
		{phrase: "User decides", kind: "unverified"},
		{phrase: "Follow-up", kind: "unverified"},
		{phrase: "As recommended", kind: "neutral", date: true},
		{phrase: "Per Figma", kind: "neutral", date: true},
		{phrase: "Per demo", kind: "neutral", date: true},
		{phrase: "Per spec", kind: "neutral", date: true},
		{phrase: "Per capture", kind: "neutral", date: true},
		{phrase: "Dev decision", kind: "neutral", date: true},
		{phrase: "User", kind: "neutral", date: true},
		{phrase: "Kept", kind: "neutral", date: true},
		{phrase: "Rejected", kind: "neutral", date: true},
		{phrase: "N/A", kind: "neutral", date: true},
		{phrase: "Moved", kind: "neutral", date: true},
		{phrase: "Ready", kind: "verified"},
		{phrase: "Done", kind: "verified", date: true},
		{phrase: "Blocked", kind: "blocked"},
		{phrase: "Design", kind: "neutral"},
		{phrase: "Implemented", kind: "neutral"},
		{phrase: "Paused", kind: "neutral"},
	],
	refs: [{prefix: "D"}, {prefix: "Q", color: "violet"}, {prefix: "B", color: "amber"}, {prefix: "R", color: "violet"}],
};
```
