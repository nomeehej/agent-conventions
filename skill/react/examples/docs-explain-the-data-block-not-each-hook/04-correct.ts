const handleBackButtonClick: MouseEventHandler<HTMLButtonElement> = (_event) => {
	// [!code ++]
	// 입력 중인 값은 저장하지 않고 폐기
	void navigate("/products");
};

useEffect(() => {
	return subscribeToProductChanges(watchedProductIds);
}, [watchedProductIds]);
