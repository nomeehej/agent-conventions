// [!code ++]
const queryClient = useQueryClient();

// [!code ++]
// ----------------------------------------------------------------------------------------
// 상품 저장 요청, 저장이 목록과 요약 집계를 함께 바꿔 둘 다 무효화
// ----------------------------------------------------------------------------------------
const mutationProductSave = useProductSave({
	mutation: {
		onSuccess: (_data, _variables, _onMutateResult, _context) => {
// [!code ++]
			void queryClient.invalidateQueries({queryKey: productListQueryKey()});
// [!code ++]
			void queryClient.invalidateQueries({queryKey: productSummaryQueryKey()});
		},
	},
});
