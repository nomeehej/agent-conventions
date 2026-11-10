// page/products/_media-upload-panel.tsx
export const MediaUploadPanel = (props: MediaUploadPanelProps) => {
	// ----------------------------------------------------------------------------------------
	// 업로드 확정 시에만 저장 요청 본문 조립, 전송
	//
	// 렌더 중 계산 없음
	// ----------------------------------------------------------------------------------------
	const handleSaveButtonClick: MouseEventHandler<HTMLButtonElement> = (_event) => {
// [!code ++]
		mutationMediaSave.mutate({data: props.files.map((file) => ({name: file.name, size: file.size}))});
	};

	return <Button onClick={handleSaveButtonClick}>저장</Button>;
};
