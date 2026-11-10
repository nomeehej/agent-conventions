const mutationProductSave = useProductSave({
	mutation: {
		onSuccess: (_data, _variables, _onMutateResult, _context) => {
// [!code error]
			void responseProductListSuspense.refetch();
		},
	},
});
