<Fragment>
	<button
		type="button"
		className={clsx("productsPage__filterToggle")}
		aria-label="필터 열기"
		onClick={handleFilterToggleClick}
	>
		<FilterIcon />
	</button>

	<label className={clsx("productsPage__keywordLabel")} htmlFor="product-keyword">
		검색어
	</label>
	<input id="product-keyword" value={props.keyword} onChange={props.onKeywordChange} />
</Fragment>
