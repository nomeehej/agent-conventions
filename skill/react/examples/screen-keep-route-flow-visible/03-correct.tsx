// page/products/_product-list-section.tsx
export const ProductListSection = () => {
	const [urlParams, setUrlParams] = useQueryStates(urlParsers);

	/**
	 * 표에 그릴 상품 조회. 조회 키는 URL의 page
	 * {@link /api/product}
	 */
	const responseProductListSuspense = useProductListSuspense(
		{page: urlParams.page},
		{query: {select: (response) => ({items: response.data.items})}},
	);

	const queryClient = useQueryClient();

	/**
	 * 상품 저장 요청, 성공 뒤 목록 재조회와 첫 페이지 이동. 새 상품이 맨 앞
	 * {@link /api/product}
	 */
	const mutationProductSave = useProductSave({
		mutation: {
			onSuccess: (_data, _variables, _onMutateResult, _context) => {
				void queryClient.invalidateQueries({queryKey: productListQueryKey()});
				void setUrlParams({page: 1});
			},
		},
	});

	/**
	 * 폼 값을 전송 형태로 바꿔 저장만 호출. 저장 뒤 흐름은 mutation 콜백 담당
	 */
	const handleProductSave: TableProps["onSave"] = (formValues) => {
		mutationProductSave.mutate({data: toProductSaveRequest(formValues)});
	};

	return <Table rows={responseProductListSuspense.data.items} onSave={handleProductSave} />;
};
