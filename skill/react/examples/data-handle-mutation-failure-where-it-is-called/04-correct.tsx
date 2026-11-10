const handleSaveButtonClick: MouseEventHandler<HTMLButtonElement> = async (_event) => {
	if (mutationAttachmentUpload.isPending || mutationProductSave.isPending) {
		return;
	}

	try {
		const uploaded = await mutationAttachmentUpload.mutateAsync({files: draftFiles});

		await mutationProductSave.mutateAsync({
			data: toProductSaveRequest(props.formValues, uploaded.attachmentIds),
		});

		void navigate("/products");
	} catch (error) {
		setSubmitErrorMessage(toSubmitErrorMessage(error));
	}
};
