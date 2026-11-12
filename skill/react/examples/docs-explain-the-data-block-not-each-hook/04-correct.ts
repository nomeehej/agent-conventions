const handleBackButtonClick: MouseEventHandler<HTMLButtonElement> = (_event) => {
	// [!code ++]
	// 입력 중인 값은 저장하지 않고 버린다.
	void navigate("/products");
};

useEffect(() => subscribeToProductChanges(watchedProductIds), [watchedProductIds]);
