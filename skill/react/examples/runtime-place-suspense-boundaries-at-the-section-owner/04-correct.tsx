// page/products/products-page.tsx: 섹션이 따로 없어 진입이 쿼리 호출. 경계는 이 진입을 그리는 셸 몫
export const ProductsPage = () => {
	const responseProductListSuspense = useProductListSuspense();

	return <Table rows={responseProductListSuspense.data.items} />;
};
