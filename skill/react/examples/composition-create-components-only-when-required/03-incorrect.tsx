// page/products/product-list-section.tsx: 초안 행에만 렌더하는 삭제 버튼의 뮤테이션을 목록이 부름
export const ProductListSection = () => {
	const responseProductListSuspense = useProductListSuspense();
	// [!code error]
	const mutationProductRemove = useProductRemove();

	const handleDeleteButtonClick = (productId: string) => () => {
		mutationProductRemove.mutate({params: {productId}});
	};

	return (
		<ul className={clsx("productListSection__root")}>
			{responseProductListSuspense.data.items.map((product) => (
				<li key={product.id} className={clsx("productListSection__item")}>
					{product.name}
					{/* [!code error] */}
					{product.status === "draft" && <Button onClick={handleDeleteButtonClick(product.id)}>삭제</Button>}
				</li>
			))}
		</ul>
	);
};
