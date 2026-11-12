// ----------------------------------------------------------------------------------------
// 상품 저장 요청
//
// 실패 문구는 호출한 이 화면이 폼 위에 표시한다.
// ----------------------------------------------------------------------------------------
const mutationProductSave = useProductSave({
	mutation: {
		onSuccess: (_data, _variables, _onMutateResult, _context) => {
			void navigate("/products");
		},
		onError: (error, _variables, _onMutateResult, _context) => {
			setSubmitErrorMessage(toSubmitErrorMessage(error));
		},
	},
});

// 저장 중 중복 호출만 차단하고 이동과 실패 표시는 뮤테이션 콜백이 맡는다.
const handleSaveButtonClick: MouseEventHandler<HTMLButtonElement> = (_event) => {
	if (mutationProductSave.isPending) return;

	mutationProductSave.mutate({data: buildProductSaveRequest(props.formValues)});
};
