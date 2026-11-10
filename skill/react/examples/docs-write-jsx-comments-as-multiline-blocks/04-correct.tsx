// [!code ++]
{/**
 * LegacyDatePicker가 className을 받지 않음, 배치용 래퍼 필요
 */}
<div className={clsx("productsPage__datePicker")}>
	<LegacyDatePicker value={value} onChange={handleChange} />
</div>;
