// [!code ++]
const queryClient = useQueryClient();

// [!code ++]
// ----------------------------------------------------------------------------------------
// 상품 저장 요청, 성공 뒤 목록과 요약 쿼리 무효화
//
// 저장이 목록과 요약 집계를 함께 변경
//
// 엔드포인트: /api/product
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
