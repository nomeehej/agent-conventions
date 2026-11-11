// page/products/media-upload-panel.tsx
// [!code error]
import {useMediaUploadPayload} from "@/page/products/_hook/use-media-upload-payload";

export const MediaUploadPanel = (props: MediaUploadPanelProps) => {
	const [saveErrorMessage, setSaveErrorMessage] = useState<string | null>(null);

	const mutationMediaSave = useMediaSave({
		mutation: {
			onError: (error, _variables, _onMutateResult, _context) => {
				setSaveErrorMessage(toSubmitErrorMessage(error));
			},
		},
	});

// [!code error]
	const mediaUploadPayload = useMediaUploadPayload(props.files);

	const handleSaveButtonClick: MouseEventHandler<HTMLButtonElement> = (_event) => {
		if (mutationMediaSave.isPending) {
			return;
		}

// [!code error]
		mutationMediaSave.mutate({data: mediaUploadPayload});
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
