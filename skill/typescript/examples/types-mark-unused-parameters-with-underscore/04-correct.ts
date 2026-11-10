interface ProductSaveCallbacks {
	onSuccess?: (data: Product, variables: ProductSaveRequest, onMutateResult: unknown, context: unknown) => void;
}

const callbacks: ProductSaveCallbacks = {
	// [!code ++]
	onSuccess: (_data, _variables, _onMutateResult, _context) => {
		void queryClient.invalidateQueries({queryKey: productListQueryKey()});
	},
};
