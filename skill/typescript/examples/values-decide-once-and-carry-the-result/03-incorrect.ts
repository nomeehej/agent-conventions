// 범례를 만들 때 색을 정한다.
const legendSeries = seriesItems.map((series, seriesIndex) => ({
	id: series.id,
	colorToken: toSeriesColorToken(series.role, seriesIndex),
}));

// 차트 둘은 범례 팔레트를 읽고도 같은 판정을 반복한다.
const chartSeries = seriesItems.map((series, index) => ({
	id: series.id,
	colorToken: colorTokenById.get(series.id) ?? toSeriesColorToken(series.role, index),
}));
