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

// [!code error]
const [shouldSubmit, setShouldSubmit] = useState(false);

// [!code error]
useEffect(() => {
// [!code error]
	if (!shouldSubmit) {
// [!code error]
		return;
// [!code error]
	}

// [!code error]
	mutationProductCreate.mutate({data: toProductCreateRequest(formValues)});
// [!code error]
}, [mutationProductCreate, formValues, shouldSubmit]);

const handleSaveButtonClick: MouseEventHandler<HTMLButtonElement> = (_event) => {
// [!code error]
	setShouldSubmit(true);
};
