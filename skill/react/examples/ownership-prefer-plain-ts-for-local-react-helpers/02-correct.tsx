// page/products/_media-upload-panel.tsx
export const MediaUploadPanel = (props: MediaUploadPanelProps) => {
	/**
	 * 업로드를 확정할 때만 저장 요청 본문을 조립해서 보냄. 렌더 중에는 계산 안 함
	 */
	const handleSaveButtonClick: MouseEventHandler<HTMLButtonElement> = (_event) => {
// [!code ++]
		mutationMediaSave.mutate({data: props.files.map((file) => ({name: file.name, size: file.size}))});
	};

	return <Button onClick={handleSaveButtonClick}>저장</Button>;
};
