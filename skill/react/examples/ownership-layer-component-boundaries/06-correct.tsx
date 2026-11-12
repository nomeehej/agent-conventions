// component/ui/line-chart/line-chart.tsx
export interface LineChartProps {
	title: string;
	points: ChartPoint[];
}

export const LineChart = (props: LineChartProps) => (
		<svg className={clsx("lineChart__root")} viewBox="0 0 100 40">
			<title>{props.title}</title>
			<polyline points={props.points.map((point) => `${point.x},${point.y}`).join(" ")} />
		</svg>
	);
