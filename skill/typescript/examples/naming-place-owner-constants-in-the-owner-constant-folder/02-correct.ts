// page/product-detail/product-detail-chart.tsx
import {range} from "es-toolkit";

// ----------------------------------------------------------------------------------------
// 상품 상세 차트의 축 눈금 수
//
// 표시 폭이 좁아 여섯을 넘으면 라벨 중첩
// ----------------------------------------------------------------------------------------
// [!code ++]
const chart_axis_tick_count = 6;

const tickTimes = range(chart_axis_tick_count).map((tickIndex) => toTickTime(tickIndex));
