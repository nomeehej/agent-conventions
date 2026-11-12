// page/product-detail/product-detail-summary.tsx
// 없음을 읽는 곳은 렌더하는 분기 하나뿐이다.
{isNotNil(summary.changeRate) && (
	<Badge tone={toSignedTone(summary.changeRate)}>{formatSignedPercent(summary.changeRate)}</Badge>
)}
