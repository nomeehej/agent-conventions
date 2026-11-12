<div className={clsx("productsPage__filter")}>
	{/* [!code error] */}
	{/* 예외: LegacyDatePicker가 className을 받지 않아 배치용 래퍼가 필요하다. */}
	<div className={clsx("productsPage__datePicker")}>
		<LegacyDatePicker value={value} onChange={handleChange} />
	</div>
</div>;
