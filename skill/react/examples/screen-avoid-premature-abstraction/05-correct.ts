// ----------------------------------------------------------------------------------------
// 등록 화면과 수정 화면의 공용 편집 훅
//
// 저장 실패를 같은 문구로 표시한다.
//
// 두 화면이 모두 부르므로 한쪽만 고치면 표시가 어긋난다.
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
