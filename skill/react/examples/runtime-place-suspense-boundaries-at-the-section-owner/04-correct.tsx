// page/products/products-page.tsx: 그 화면 모양의 대체 화면 없음, 진입 파일이 쿼리 호출. 경계는 라우트 프레임의 공용 경계 담당
export const ProductsPage = () => {
	const responseProductListSuspense = useProductListSuspense();

	return <Table rows={responseProductListSuspense.data.items} />;
};
