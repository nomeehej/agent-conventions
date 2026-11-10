// component/ui/line-chart/line-chart.tsx
// ----------------------------------------------------------------------------------------
// 꺾은선 그래프 계약
//
// title: 그래프의 접근 가능한 이름
// points: 그릴 좌표. 도메인 무관
// ----------------------------------------------------------------------------------------
export interface LineChartProps {
	title: string;
	points: ChartPoint[];
}

export const LineChart = (props: LineChartProps) => {
	return (
		<svg className={clsx("lineChart__root")} viewBox="0 0 100 40">
			<title>{props.title}</title>
			<polyline points={props.points.map((point) => `${point.x},${point.y}`).join(" ")} />
		</svg>
	);
};
