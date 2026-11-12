// page/products/product-sidebar.tsx: 열고 닫는 사이드바만 쓰는 접힘 상태를 가진다.
export const ProductSidebar = () => {
	const [expandedItems, setExpandedItems] = useState<string[]>([]);

	return <Tree expandedItems={expandedItems} onExpandedItemsChange={setExpandedItems} />;
};
