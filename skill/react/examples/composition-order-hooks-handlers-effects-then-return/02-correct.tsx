export const OrderToolbar = () => {
	const [selectedIds, setSelectedIds] = useState<string[]>([]);
// [!code ++]
	const [isPanelOpen, setIsPanelOpen] = useState(false);

// [!code ++]
	/**
	 * 비우기는 선택만 지우고 패널은 유지
	 */
	const handleClearButtonClick: MouseEventHandler<HTMLButtonElement> = (_event) => {
		setSelectedIds([]);
	};

// [!code ++]
	const handlePanelOpenButtonClick: MouseEventHandler<HTMLButtonElement> = (_event) => {
		setIsPanelOpen(true);
	};

// [!code ++]
	useEffect(() => {
// [!code ++]
		document.title = `주문 ${selectedIds.length}건 선택`;
// [!code ++]
	}, [selectedIds]);

	return (
		<section className={clsx("orderToolbar__root")}>
			<Button onClick={handleClearButtonClick}>비우기</Button>
			<Button onClick={handlePanelOpenButtonClick}>필터</Button>
			{isPanelOpen && <OrderFilterPanel />}
		</section>
	);
};
