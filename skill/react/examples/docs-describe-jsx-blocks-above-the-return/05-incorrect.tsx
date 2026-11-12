export const OrderTable = () => {
	// ----------------------------------------------------------------------------------------
	// 주문 표 화면 구성
	//
	//   OrderTableHeader
	//      정렬 기준과 단위를 보여 준다.
	// ----------------------------------------------------------------------------------------
	return (
		<section className={clsx("orderTable__root")}>
			<OrderTableHeader sort={sort} />
			{/* [!code error] */}
			{rows.map((row) => (
				<OrderTableRow key={row.id} row={row} />
			))}
			{/* [!code error] */}
			{expandedRows.map((row) => (
				<OrderTableChildRow key={row.id} row={row} />
			))}
		</section>
	);
};
