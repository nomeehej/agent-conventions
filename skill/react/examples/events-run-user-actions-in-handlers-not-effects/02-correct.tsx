const mutationProductCreate = useProductCreate({
	mutation: {
		onSuccess: (_data, _variables, _onMutateResult, _context) => {
			void navigate("/products");
		},
		onError: (error, _variables, _onMutateResult, _context) => {
			setSubmitErrorMessage(toSubmitErrorMessage(error));
		},
	},
});

// [!code ++]
const handleSaveButtonClick: MouseEventHandler<HTMLButtonElement> = (_event) => {
	if (mutationProductCreate.isPending) return;

	mutationProductCreate.mutate({data: buildProductCreateRequest(formValues)});
};

<Button disabled={mutationProductCreate.isPending} onClick={handleSaveButtonClick}>
	저장
</Button>;
