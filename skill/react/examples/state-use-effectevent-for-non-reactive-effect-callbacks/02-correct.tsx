// 최신 onChange를 실행하고 구독은 productId가 바뀔 때만 다시 건다.
const handleProductChange = useEffectEvent((change: ProductChange) => {
	props.onChange(change);
});

useEffect(() => {
	const unsubscribe = subscribeToProductChanges(props.productId, (change) => {
		handleProductChange(change);
	});

	return unsubscribe;
}, [props.productId]);
