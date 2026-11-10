// page/products/products-page.tsx
// [!code error]
const table_first_row_index = 0;
// [!code error]
const table_page_step = 1;

toggleSelection(rows[table_first_row_index]?.id);
setPage(urlParams.page + table_page_step);
