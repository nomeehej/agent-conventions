return (
	<section>
{/* [!code ++] */}
		{props.view === "chart" && <Chart />}
{/* [!code ++] */}
		{props.view === "table" && <Table />}
	</section>
);
