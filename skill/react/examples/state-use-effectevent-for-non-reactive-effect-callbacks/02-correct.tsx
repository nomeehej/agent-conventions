// 최신 onChange 실행, 구독은 productId가 바뀔 때만 다시 걸기
const handleProductChange = useEffectEvent((change: ProductChange) => {
	props.onChange(change);
});

useEffect(() => {
	const unsubscribe = subscribeToProductChanges(props.productId, (change) => {
		handleProductChange(change);
	});

	return unsubscribe;
}, [props.productId]);
