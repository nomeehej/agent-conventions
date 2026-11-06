<Button
	onClick={() => {
		if (!selectedProduct) {
			return;
		}

		mutationProductRemove.mutate({params: {productId: selectedProduct.id}});
	}}
>
	삭제
</Button>
