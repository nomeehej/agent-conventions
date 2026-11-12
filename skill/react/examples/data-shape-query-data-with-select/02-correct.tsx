// ----------------------------------------------------------------------------------------
// 상품 목록 조회
//
// 표가 쓰는 필드 이름으로 가공해 화면에 응답 구조를 드러내지 않는다.
// ----------------------------------------------------------------------------------------
const responseProductListSuspense = useProductListSuspense(
	{},
	{
		query: {
			select: (response) => ({
				items: response.data.items.map((product) => ({id: product.id, name: product.name})),
			}),
		},
	},
);

<Table rows={responseProductListSuspense.data.items} />;
