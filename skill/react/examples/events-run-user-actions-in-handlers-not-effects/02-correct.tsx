const mutationProductCreate = useProductCreate({
	mutation: {
		onSuccess: (_data, _variables, _onMutateResult, _context) => {
			void navigate("/products");
		},
	},
});

// [!code ++]
const handleSaveButtonClick: MouseEventHandler<HTMLButtonElement> = (_event) => {
	mutationProductCreate.mutate({data: toProductCreateRequest(formValues)});
};
