// page/products/product-sidebar.tsx: 접어 둔 노드와 스크롤 위치를 자기 상태로 보유
export const ProductSidebar = () => {
	const [expandedItems, setExpandedItems] = useState<string[]>([]);

	return <Tree expandedItems={expandedItems} onExpandedItemsChange={setExpandedItems} />;
};
