export const ProductTableSection = () => {
	const responseProductListSuspense = useProductListSuspense();
	const [selectedRows, setSelectedRows] = useState<ProductRow[]>([]);

	// ----------------------------------------------------------------------------------------
	// 고른 행은 이 섹션 안에만 두고 search 파라미터로 올리지 않음
	// ----------------------------------------------------------------------------------------
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
