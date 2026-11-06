<section className={clsx("orderTable__root")}>
	{/**
	 * 헤더 행. 정렬 기준과 단위 표시
	 */}
	<OrderTableHeader sort={sort} />
	{rows.map((row) => (
		<OrderTableRow key={row.id} row={row} />
	))}
	{expandedRows.map((row) => (
		<OrderTableChildRow key={row.id} row={row} />
	))}
</section>;
