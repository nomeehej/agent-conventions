export const OrderToolbar = () => {
	const [selectedIds, setSelectedIds] = useState<string[]>([]);
	const [isPanelOpen, setIsPanelOpen] = useState(false);
// [!code error]
	// 반환에서만 읽는 판정이 훅 구획에 있어 쓰는 자리와 멀다.
// [!code error]
	const isClearDisabled = selectedIds.length === 0 || isPanelOpen;

	const handleClearButtonClick: MouseEventHandler<HTMLButtonElement> = (_event) => {
		setSelectedIds([]);
	};

	const handlePanelOpenButtonClick: MouseEventHandler<HTMLButtonElement> = (_event) => {
		setIsPanelOpen(true);
	};

	useEffect(() => {
		document.title = `주문 ${selectedIds.length}건 선택`;
	}, [selectedIds]);

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
