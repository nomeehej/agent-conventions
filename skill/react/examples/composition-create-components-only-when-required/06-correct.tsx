// page/products/product-tree-section.tsx: 진입 파일의 `Suspense` 아래 내용물, 사이드바 래퍼는 진입 파일의 JSX
export const ProductTreeSection = () => {
	const [urlParams, setUrlParams] = useQueryStates(urlParsers);
	const [expandedItems, setExpandedItems] = useState<string[]>([]);

	// ----------------------------------------------------------------------------------------
	// 분류 트리 조회, 사이드바가 그릴 분류 노드로 가공
	//
	// 트리 펼침 상태는 이 섹션이 별도 보유
	// ----------------------------------------------------------------------------------------
	const responseProductTreeSuspense = useProductTreeSuspense(
		{},
		{query: {select: (response) => ({categoryNodes: response.data.categoryNodes.map(toTreeData)})}},
	);

	// 새로 고침해도 같은 화면이 되도록 고른 분류를 URL에 기록
	const handleTreeSelectedItemsChange: TreeProps["onSelectedItemsChange"] = (itemId) => {
		if (itemId === null) {
			return;
		}

		void setUrlParams({categoryId: itemId});
	};

	return (
		<section className={clsx("productTreeSection__root")}>
			{responseProductTreeSuspense.data.categoryNodes.length > 0 && (
				<Tree
					items={responseProductTreeSuspense.data.categoryNodes}
					expandedItems={expandedItems}
					selectedItems={urlParams.categoryId}
					onExpandedItemsChange={setExpandedItems}
					onSelectedItemsChange={handleTreeSelectedItemsChange}
				/>
			)}
			{responseProductTreeSuspense.data.categoryNodes.length === 0 && <Empty description="분류가 없습니다" />}
		</section>
	);
};
