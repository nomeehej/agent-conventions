// page/products/media-upload-panel.tsx
export const MediaUploadPanel = (props: MediaUploadPanelProps) => {
	const [saveErrorMessage, setSaveErrorMessage] = useState<string | null>(null);

	const mutationMediaSave = useMediaSave({
		mutation: {
			onError: (error, _variables, _onMutateResult, _context) => {
				setSaveErrorMessage(toSubmitErrorMessage(error));
			},
		},
	});

	// 렌더 중 계산 없이 업로드 확정 시에만 저장 요청 본문 조립
	const handleSaveButtonClick: MouseEventHandler<HTMLButtonElement> = (_event) => {
		if (mutationMediaSave.isPending) {
			return;
		}

// [!code ++]
		mutationMediaSave.mutate({data: props.files.map((file) => ({name: file.name, size: file.size}))});
	};

	return (
		<Fragment>
			<Button disabled={mutationMediaSave.isPending} onClick={handleSaveButtonClick}>
				저장
			</Button>
			{saveErrorMessage !== null && <p className={clsx("mediaUploadPanel__error")}>{saveErrorMessage}</p>}
		</Fragment>
	);
};
