// type/chart-series.ts
// component/ui/line-chart/_type에 있던 것을 page에서도 쓴다고 루트로 옮김
export interface ChartSeries {
	points: ChartPoint[];
}

// page/product-detail/_function/to-chart-option.ts
import type {ChartSeries} from "@/type/chart-series";
