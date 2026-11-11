// page/products/media-upload-panel.tsx
// [!code error]
import {useMediaUploadPayload} from "@/page/products/_hook/use-media-upload-payload";

export const MediaUploadPanel = (props: MediaUploadPanelProps) => {
// [!code error]
	const mediaUploadPayload = useMediaUploadPayload(props.files);

	const handleSaveButtonClick: MouseEventHandler<HTMLButtonElement> = (_event) => {
// [!code error]
		mutationMediaSave.mutate({data: mediaUploadPayload});
	};

	return <Button onClick={handleSaveButtonClick}>저장</Button>;
};
