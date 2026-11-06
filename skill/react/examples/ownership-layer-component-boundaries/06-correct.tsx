// component/ui/line-chart/line-chart.tsx
/**
 * 꺾은선 그래프 계약
 */
export interface LineChartProps {
	/**
	 * 그래프의 접근 가능한 이름
	 */
	title: string;
	/**
	 * 그릴 좌표. 어느 도메인의 값인지 모름
	 */
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
