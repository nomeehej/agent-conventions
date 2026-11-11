// page/products/product-sidebar.tsx: 열고 닫는 사이드바에서만 쓰는 접힘 상태를 보유, 조건부로 렌더하는 JSX의 훅
export const ProductSidebar = () => {
	const [expandedItems, setExpandedItems] = useState<string[]>([]);

	return <Tree expandedItems={expandedItems} onExpandedItemsChange={setExpandedItems} />;
};
