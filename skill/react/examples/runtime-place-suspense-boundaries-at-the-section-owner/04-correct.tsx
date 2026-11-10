// page/products/products-page.tsx: 섹션 없음, 진입 파일이 쿼리 호출. 경계는 이 진입을 렌더하는 셸 담당
export const ProductsPage = () => {
	const responseProductListSuspense = useProductListSuspense();

	return <Table rows={responseProductListSuspense.data.items} />;
};
