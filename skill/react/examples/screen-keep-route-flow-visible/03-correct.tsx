// page/products/_product-list-section.tsx
export const ProductListSection = () => {
	const [urlParams, setUrlParams] = useQueryStates(urlParsers);

	// ----------------------------------------------------------------------------------------
	// 상품 목록 조회와 저장 요청
	//
	// 조회 키는 URL의 page
	// 저장 뒤 목록을 다시 조회하고 첫 페이지로 이동 → 새 상품이 맨 앞
	// ----------------------------------------------------------------------------------------
	const responseProductListSuspense = useProductListSuspense(
		{page: urlParams.page},
		{query: {select: (response) => ({items: response.data.items})}},
	);

	const queryClient = useQueryClient();

	const mutationProductSave = useProductSave({
		mutation: {
			onSuccess: (_data, _variables, _onMutateResult, _context) => {
				void queryClient.invalidateQueries({queryKey: productListQueryKey()});
				void setUrlParams({page: 1});
			},
		},
	});

	// 저장 뒤 흐름은 mutation 콜백 담당
	const handleProductSave: TableProps["onSave"] = (formValues) => {
		mutationProductSave.mutate({data: toProductSaveRequest(formValues)});
	};

	return <Table rows={responseProductListSuspense.data.items} onSave={handleProductSave} />;
};
