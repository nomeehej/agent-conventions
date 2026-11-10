/**
 * 상품 생성 요청, 성공 뒤 목록으로 이동
 * {@link /api/product}
 */
const mutationProductCreate = useProductCreate({
	mutation: {
		onSuccess: (_data, _variables, _onMutateResult, _context) => {
			void navigate("/products");
		},
	},
});

// [!code ++]
/**
 * 버튼을 누른 그 자리에서 생성 호출. 상태로 올려 이펙트가 대신 부르게 하지 않음
 */
// [!code ++]
const handleSaveButtonClick: MouseEventHandler<HTMLButtonElement> = (_event) => {
	mutationProductCreate.mutate({data: toProductCreateRequest(formValues)});
};
