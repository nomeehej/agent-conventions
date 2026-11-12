// 범례를 만들 때 색을 정해 항목에 저장한다.
const comparisonSeries = seriesItems.map((series, seriesIndex) => ({
	...series,
	colorToken: toSeriesColorToken(series.role, seriesIndex),
}));

// 차트 둘은 같은 항목의 색을 그대로 읽는다.
const chartSeries = comparisonSeries.map((series) => ({
	id: series.id,
	colorToken: series.colorToken,
}));
