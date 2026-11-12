// page/products/product-list-section.tsx
export const ProductListSection = () => {
	const [urlParams, setUrlParams] = useQueryStates(urlParsers);
	const [saveErrorMessage, setSaveErrorMessage] = useState<string | null>(null);

	// ----------------------------------------------------------------------------------------
	// 상품 목록 조회와 저장 요청
	//
	// 조회 키는 URL의 page다.
	// 저장 뒤 목록을 다시 조회하고 첫 페이지로 이동하므로 새 상품이 맨 앞에 온다.
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
			onError: (error, _variables, _onMutateResult, _context) => {
				setSaveErrorMessage(toSubmitErrorMessage(error));
			},
		},
	});

	const handleProductSave: TableProps["onSave"] = (formValues) => {
		if (mutationProductSave.isPending) return;

		mutationProductSave.mutate({data: buildProductSaveRequest(formValues)});
	};

	return (
		<Fragment>
			{saveErrorMessage !== null && <p className={clsx("productListSection__error")}>{saveErrorMessage}</p>}
			<Table rows={responseProductListSuspense.data.items} onSave={handleProductSave} />
		</Fragment>
	);
};
