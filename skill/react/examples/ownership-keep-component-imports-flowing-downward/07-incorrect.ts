// type/chart-series.ts
// component/ui/line-chart/_type에 있던 것을 page에서도 쓴다며 루트로 옮겼다.
export interface ChartSeries {
	points: ChartPoint[];
}

// page/product-detail/_function/to-chart-option.ts
import type {ChartSeries} from "@/type/chart-series";
