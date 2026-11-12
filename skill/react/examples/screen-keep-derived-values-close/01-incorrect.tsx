export const ProductTableSection = () => {
	const responseProductListSuspense = useProductListSuspense();

	// 고른 행은 이 내용물 안에만 두고 search 파라미터로 올리지 않는다.
	const [selectedRows, setSelectedRows] = useState<ProductRow[]>([]);

	const handleTableRowSelect: TableProps<ProductRow>["onRowSelect"] = (rows) => {
		setSelectedRows(rows);
	};

// [!code error]
	// 아래 둘은 이름만 남고 무엇에서 나온 값인지 드러나지 않는다.
// [!code error]
	const hasSelectedRows = selectedRows.length > 0;
// [!code error]
	const bulkActionLabel = `${selectedRows.length}건 삭제`;

	return (
		<Fragment>
			<Table rows={responseProductListSuspense.data.items} onRowSelect={handleTableRowSelect} />

// [!code error]
			{hasSelectedRows && <ProductBulkActionBar label={bulkActionLabel} />}
		</Fragment>
	);
};
