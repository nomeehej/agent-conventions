// [!code error]
// component/widget/line-chart/line-chart.tsx
export interface LineChartProps {
	title: string;
	points: ChartPoint[];
}

// 좌표 배열만 받고 도메인 타입을 모름. 조립 규모만 보고 widget에 둠
// [!code error]
export const LineChart = (props: LineChartProps) => {
	return (
		<svg className={clsx("lineChart__root")} viewBox="0 0 100 40">
			<title>{props.title}</title>
			<polyline points={props.points.map((point) => `${point.x},${point.y}`).join(" ")} />
		</svg>
	);
};
