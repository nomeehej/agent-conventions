return (
	<section>
// [!code error]
		{props.view === "chart" ? <ChartView /> : <TableView />}
	</section>
);
