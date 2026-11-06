return (
	<section>
// [!code error]
		{props.view === "chart" ? <Chart /> : <Table />}
	</section>
);
