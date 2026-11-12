const mutationProductCreate = useProductCreate({
	mutation: {
		onSuccess: (_data, _variables, _onMutateResult, _context) => {
			void navigate("/products");
		},
		onError: (error, _variables, _onMutateResult, _context) => {
			setSubmitErrorMessage(toSubmitErrorMessage(error));
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
	mutationProductCreate.mutate({data: buildProductCreateRequest(formValues)});
// [!code error]
}, [mutationProductCreate, formValues, shouldSubmit]);

const handleSaveButtonClick: MouseEventHandler<HTMLButtonElement> = (_event) => {
	if (mutationProductCreate.isPending) {
		return;
	}

// [!code error]
	setShouldSubmit(true);
};

<Button disabled={mutationProductCreate.isPending} onClick={handleSaveButtonClick}>
	저장
</Button>;
