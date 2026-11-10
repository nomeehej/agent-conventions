interface ProductSaveCallbacks {
	onSuccess?: (data: Product, variables: ProductSaveRequest, onMutateResult: unknown, context: unknown) => void;
}

const callbacks: ProductSaveCallbacks = {
	// [!code error]
	onSuccess: () => {
		void queryClient.invalidateQueries({queryKey: productListQueryKey()});
	},
};
