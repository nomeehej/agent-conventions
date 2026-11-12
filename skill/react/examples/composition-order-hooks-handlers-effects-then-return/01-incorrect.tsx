export const OrderToolbar = () => {
// [!code error]
	// selectedIds가 아직 초기화되지 않아 의존성 배열을 평가하는 이 줄에서 오류가 난다.
// [!code error]
	useEffect(() => {
// [!code error]
		document.title = `주문 ${selectedIds.length}건 선택`;
// [!code error]
	}, [selectedIds]);

	const [selectedIds, setSelectedIds] = useState<string[]>([]);

	const handleClearButtonClick: MouseEventHandler<HTMLButtonElement> = (_event) => {
		setSelectedIds([]);
	};

// [!code error]
	const [isPanelOpen, setIsPanelOpen] = useState(false);

	const handlePanelOpenButtonClick: MouseEventHandler<HTMLButtonElement> = (_event) => {
		setIsPanelOpen(true);
	};

	return (
		<section className={clsx("orderToolbar__root")}>
			<Button onClick={handleClearButtonClick}>비우기</Button>
			<Button onClick={handlePanelOpenButtonClick}>필터</Button>
			{isPanelOpen && <OrderFilterPanel />}
		</section>
	);
};
