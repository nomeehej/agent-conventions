export const ProductTableSection = () => {
	const responseProductListSuspense = useProductListSuspense();

	// 고른 행은 이 내용물 안에만 두고 search 파라미터로 올리지 않음
	const [selectedRows, setSelectedRows] = useState<ProductRow[]>([]);

	const handleTableRowSelect: TableProps<ProductRow>["onRowSelect"] = (rows) => {
		setSelectedRows(rows);
	};

	return (
		<Fragment>
			<Table rows={responseProductListSuspense.data.items} onRowSelect={handleTableRowSelect} />

{/* [!code ++] */}
			{selectedRows.length > 0 && (
// [!code ++]
				<ProductBulkActionBar label={`${selectedRows.length}건 삭제`} />
// [!code ++]
			)}
		</Fragment>
	);
};
