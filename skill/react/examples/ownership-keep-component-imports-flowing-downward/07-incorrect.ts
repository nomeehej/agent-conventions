// type/chart-series.ts
// component/ui/line-chart/_type에 있던 것을 page에서도 쓴다고 루트로 옮김
// ----------------------------------------------------------------------------------------
// 차트 계열
//
// points: 선 하나가 그리는 좌표
// ----------------------------------------------------------------------------------------
export interface ChartSeries {
	points: ChartPoint[];
}

// page/product-detail/product-table-section/_function/to-chart-option.ts
import type {ChartSeries} from "@/type/chart-series";
