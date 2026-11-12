export const OrderTable = () => {
	// ----------------------------------------------------------------------------------------
	// 주문 표 화면 구성
	//
	//   OrderTableHeader
	//      정렬 기준과 단위를 보여 준다.
	//
	// [!code ++]
	//   OrderTableRow
	//      상세 버튼과 아코디언이 있는 기본 행이다.
	//
	// [!code ++]
	//   OrderTableChildRow
	//      펼친 자식 주문 행이고 상세 버튼과 아코디언이 없다.
	// ----------------------------------------------------------------------------------------
	return (
		<section className={clsx("orderTable__root")}>
			<OrderTableHeader sort={sort} />
			{rows.map((row) => (
				<OrderTableRow key={row.id} row={row} />
			))}
			{expandedRows.map((row) => (
				<OrderTableChildRow key={row.id} row={row} />
			))}
		</section>
	);
};
