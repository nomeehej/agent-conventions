const mutationProductRemove = useProductRemove({
	mutation: {
		onSuccess: (_data, _variables, _onMutateResult, _context) => {
			void navigate("/products");
		},
		onError: (error, _variables, _onMutateResult, _context) => {
			setSubmitErrorMessage(toSubmitErrorMessage(error));
		},
	},
});

<Button
	disabled={mutationProductRemove.isPending}
	onClick={(_event) => {
		if (!selectedProduct || mutationProductRemove.isPending) {
			return;
		}

		mutationProductRemove.mutate({params: {productId: selectedProduct.id}});
	}}
>
	삭제
</Button>;
