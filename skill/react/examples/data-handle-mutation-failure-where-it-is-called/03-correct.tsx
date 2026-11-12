const handleSaveButtonClick: MouseEventHandler<HTMLButtonElement> = (_event) => {
	// 버튼 disabled와 별개로 겹쳐 들어온 저장을 한 번 더 차단
	if (mutationProductSave.isPending) {
		return;
	}

	mutationProductSave.mutate({data: buildProductSaveRequest(props.formValues)});
};

<Button disabled={mutationProductSave.isPending} onClick={handleSaveButtonClick}>
	저장
</Button>;
