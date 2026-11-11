// page/products/product-list-section.tsx: 진입 파일의 경계 하나 아래 내용물, 요약 줄과 목록을 함께 렌더
export const ProductListSection = () => {
	// ----------------------------------------------------------------------------------------
	// 상품 목록 조회, 요약 줄과 목록이 같은 응답을 씀
	// ----------------------------------------------------------------------------------------
	const responseProductListSuspense = useProductListSuspense();

	return (
		<section className={clsx("productListSection__root")}>
			<p className={clsx("productListSection__total")}>상품 {responseProductListSuspense.data.total}개</p>
			<Table rows={responseProductListSuspense.data.items} />
		</section>
	);
};
