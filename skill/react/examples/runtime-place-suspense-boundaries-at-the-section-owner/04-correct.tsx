// page/products/products-page.tsx
// 그 화면 모양의 대체 화면이 없어 진입 파일이 쿼리를 부른다.
// 경계는 라우트 프레임의 공용 경계가 맡는다.
export const ProductsPage = () => {
	const responseProductListSuspense = useProductListSuspense();

	return <Table rows={responseProductListSuspense.data.items} />;
};
