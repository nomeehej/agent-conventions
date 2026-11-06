<Fragment>
// [!code error]
	<div className={clsx("productsPage__filterToggle")} onClick={handleFilterToggleClick}>
		<FilterIcon />
// [!code error]
	</div>

// [!code error]
	<input value={props.keyword} onChange={props.onKeywordChange} />
</Fragment>
