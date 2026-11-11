import type {MouseEventHandler} from "react";

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

const handleRemoveProductButtonClick: MouseEventHandler<HTMLButtonElement> = (_event) => {
	if (!selectedProduct || mutationProductRemove.isPending) {
		return;
	}

	mutationProductRemove.mutate({params: {productId: selectedProduct.id}});
};

<Button disabled={mutationProductRemove.isPending} onClick={handleRemoveProductButtonClick}>
	삭제
</Button>;
