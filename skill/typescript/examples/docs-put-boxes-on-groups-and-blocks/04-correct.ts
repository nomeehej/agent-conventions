// page/products/product-preview-section.tsx

// ----------------------------------------------------------------------------------------
// 미리보기 정책 값
//
// [!code ++]
//   preview_row_count
//      한 번에 그리는 행 수로, 서버가 한 번에 주는 최대치와 같다.
//
// [!code ++]
//   preview_refresh_interval
//      다시 조회하는 간격이고 단위는 ms다.
// ----------------------------------------------------------------------------------------
const preview_row_count = 5;
const preview_refresh_interval = 30_000;
