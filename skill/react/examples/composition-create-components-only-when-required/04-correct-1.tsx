// page/products/product-list-section.tsx
export const ProductListSection = () => {
	// ----------------------------------------------------------------------------------------
	// 상품 목록 조회
	//
	// 삭제 요청은 초안 행의 삭제 버튼이 소유한다.
	// ----------------------------------------------------------------------------------------
	const responseProductListSuspense = useProductListSuspense();

	return (
		<ul className={clsx("productListSection__root")}>
			{responseProductListSuspense.data.items.map((product) => (
				<li key={product.id} className={clsx("productListSection__item")}>
					{product.name}
					{/* [!code ++] */}
					{product.status === "draft" && <DeleteProductButton productId={product.id} />}
				</li>
			))}
		</ul>
	);
};
