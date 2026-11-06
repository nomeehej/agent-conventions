// [!code error]
<div className={clsx("ordersPage__box")}>
{/* [!code error] */}
	<div className={clsx("ordersPage__inner")}>
		<LegacyDatePicker value={value} onChange={handleChange} />
	</div>
</div>
