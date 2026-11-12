<div className={clsx("productsPage__filter")}>
	<div
		// [!code ++]
		// 예외: LegacyDatePicker가 className을 받지 않아 배치용 래퍼가 필요하다.
		className={clsx("productsPage__datePicker")}
	>
		<LegacyDatePicker value={value} onChange={handleChange} />
	</div>
</div>;
