export const OrderToolbar = () => {
	const [selectedIds, setSelectedIds] = useState<string[]>([]);
	const [isPanelOpen, setIsPanelOpen] = useState(false);

	// ----------------------------------------------------------------------------------------
	// 비우기는 선택만 지우고 패널은 유지
	// ----------------------------------------------------------------------------------------
	const handleClearButtonClick: MouseEventHandler<HTMLButtonElement> = (_event) => {
		setSelectedIds([]);
	};

	const handlePanelOpenButtonClick: MouseEventHandler<HTMLButtonElement> = (_event) => {
		setIsPanelOpen(true);
	};

	useEffect(() => {
		document.title = `주문 ${selectedIds.length}건 선택`;
	}, [selectedIds]);

// [!code ++]
	const isClearDisabled = selectedIds.length === 0 || isPanelOpen;

	return (
		<section className={clsx("orderToolbar__root")}>
			<Button disabled={isClearDisabled} onClick={handleClearButtonClick}>
				비우기
			</Button>
			<Button onClick={handlePanelOpenButtonClick}>필터</Button>
			{isPanelOpen && <OrderFilterPanel />}
		</section>
	);
};
