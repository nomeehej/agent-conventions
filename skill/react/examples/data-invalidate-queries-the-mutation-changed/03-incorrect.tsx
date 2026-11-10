const mutationProductSave = useProductSave({
	mutation: {
		onSuccess: (saved, _variables, _onMutateResult, _context) => {
			queryClient.setQueryData(["products"], (previous = []) => [...previous, saved]);
		},
	},
});
