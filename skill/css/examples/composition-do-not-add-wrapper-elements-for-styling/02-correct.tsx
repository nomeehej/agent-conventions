<div
	// 예외: LegacyDatePicker가 className을 받지 않아 배치용 래퍼가 필요하다.
	className={clsx("ordersPage__dateField")}
>
	<LegacyDatePicker value={value} onChange={handleChange} />
</div>
