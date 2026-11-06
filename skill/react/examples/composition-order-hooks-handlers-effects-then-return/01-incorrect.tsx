export const OrderToolbar = () => {
// [!code error]
	// selectedIds가 아직 초기화 전이라 의존성 배열을 평가하는 이 줄에서 오류
// [!code error]
	useEffect(() => {
// [!code error]
		document.title = `주문 ${selectedIds.length}건 선택`;
// [!code error]
	}, [selectedIds]);

	const [selectedIds, setSelectedIds] = useState<string[]>([]);

	const handleClearButtonClick: MouseEventHandler<HTMLButtonElement> = () => {
		setSelectedIds([]);
	};

// [!code error]
	const [isPanelOpen, setIsPanelOpen] = useState(false);

	const handlePanelOpenButtonClick: MouseEventHandler<HTMLButtonElement> = () => {
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
