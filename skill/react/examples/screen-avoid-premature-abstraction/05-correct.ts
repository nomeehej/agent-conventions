// ----------------------------------------------------------------------------------------
// 등록 화면과 수정 화면의 공용 편집 훅, 저장 실패를 같은 문구로 표시
//
// 두 화면이 모두 호출 → 한쪽만 고치면 표시 불일치
// ----------------------------------------------------------------------------------------
export const useProductEditor = () => {
	const form = useForm<ProductEditorFormValues>();
	const [submitErrorMessage, setSubmitErrorMessage] = useState<string | null>(null);

	const mutationProductSave = useProductSave({
		mutation: {
			onError: (error, _variables, _onMutateResult, _context) => {
				setSubmitErrorMessage(toSubmitErrorMessage(error));
			},
		},
	});

	return {form, mutationProductSave, submitErrorMessage};
};
