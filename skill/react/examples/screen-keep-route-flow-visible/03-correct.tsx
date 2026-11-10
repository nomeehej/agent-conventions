// page/products/_product-list-section.tsx
export const ProductListSection = () => {
	const [urlParams, setUrlParams] = useQueryStates(urlParsers);

	/**
	 * 표에 그릴 상품을 URL의 page로 조회
	 */
	const responseProductListSuspense = useProductListSuspense(
		{page: urlParams.page},
		{query: {select: (response) => ({items: response.data.items})}},
	);

	const queryClient = useQueryClient();

	/**
	 * 저장 성공 시 목록을 다시 읽고 첫 페이지로 이동. 새 상품이 맨 앞
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
	 * 폼 값을 전송 형태로 바꿔 저장만 호출. 저장 뒤 흐름은 mutation 콜백이 이어 감
	 */
	const handleProductSave: TableProps["onSave"] = (formValues) => {
		mutationProductSave.mutate({data: toProductSaveRequest(formValues)});
	};

	return <Table rows={responseProductListSuspense.data.items} onSave={handleProductSave} />;
};
