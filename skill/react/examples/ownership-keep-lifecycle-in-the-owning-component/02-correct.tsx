// component/widget/chart-card/chart-card.tsx
export const ChartCard = (props: ChartCardProps) => {
	const containerRef = useRef<HTMLDivElement>(null);
	const chartRef = useRef<ChartInstance | null>(null);

	useEffect(() => {
		if (!containerRef.current) {
			return;
		}

		// 외부 차트 라이브러리 인스턴스. 만든 컴포넌트가 resize와 dispose까지 책임
		const instance = mountChart(containerRef.current);
		const handleResize = (_event: UIEvent) => {
			instance.resize();
		};

		window.addEventListener("resize", handleResize);
		chartRef.current = instance;

		return () => {
			chartRef.current = null;
			window.removeEventListener("resize", handleResize);
			instance.dispose();
		};
	}, []);

	useEffect(() => {
		chartRef.current?.setOption(props.option);
	}, [props.option]);

	return <div ref={containerRef} className={clsx("chartCard__canvas")} />;
};
