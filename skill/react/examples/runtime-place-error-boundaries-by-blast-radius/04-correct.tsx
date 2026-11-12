// [!code ++]
// page/products/products-page.tsx
export const ProductsPage = () => {
// [!code ++]
	// ----------------------------------------------------------------------------------------
	// 상품 목록 조회
	//
	// 실패는 셸의 화면 층 경계가 처리하므로 본문은 성공 경로만 렌더한다.
	// ----------------------------------------------------------------------------------------
	const responseProductListSuspense = useProductListSuspense();

	return <Table rows={responseProductListSuspense.data.items} />;
};
