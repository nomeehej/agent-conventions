/**
 * 저장 성공 시 목록 화면으로 이동. 실패 문구는 폼 위에 표시
 */
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

/**
 * 저장 중 중복 호출 차단. 이동과 실패 표시는 mutation 콜백이 담당
 */
const handleSaveButtonClick: MouseEventHandler<HTMLButtonElement> = (_event) => {
	if (mutationProductSave.isPending) {
		return;
	}

	mutationProductSave.mutate({data: toProductSaveRequest(props.formValues)});
};
