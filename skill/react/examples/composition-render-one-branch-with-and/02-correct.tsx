return (
	<section>
{/* [!code ++] */}
		{props.view === "chart" && <ChartView />}
{/* [!code ++] */}
		{props.view === "table" && <TableView />}
	</section>
);
