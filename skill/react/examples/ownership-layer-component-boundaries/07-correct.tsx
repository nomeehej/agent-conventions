// component/widget/chart-card/chart-card.tsx
import {LineChart} from "@/component/ui/line-chart/line-chart";

export const ChartCard = (props: ChartCardProps) => <LineChart title="일별 주문 수" points={toChartPoints(props.dailyCounts)} />;
