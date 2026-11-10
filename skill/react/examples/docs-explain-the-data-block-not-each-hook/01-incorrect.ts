// ----------------------------------------------------------------------------------------
// [!code error]
// 상품 목록 조회
//
// 필터 섹션과 같은 쿼리 키(URL의 keyword, page) → 요청은 한 번
// ----------------------------------------------------------------------------------------
const responseProductListSuspense = useGetProductListSuspense({keyword: urlParams.keyword, page: urlParams.page});

// ----------------------------------------------------------------------------------------
// [!code error]
// 상품 저장 요청
//
// 이 화면은 상세를 열지 않음 → 저장 뒤 상세 키는 무효화하지 않음
// ----------------------------------------------------------------------------------------
const mutationProductSave = useProductSave({
	mutation: {
		onSuccess: (_data, _variables, _onMutateResult, _context) => {
			void queryClient.invalidateQueries({queryKey: productListQueryKey()});
		},
	},
});
