// [!code error]
const {items} = responseProductSearchSuspense.data;

useEffect(() => {
// [!code error]
	if (items.length > 0) {
		return;
	}

	reportEmptySearch(urlParams.keyword);
// [!code error]
}, [items, urlParams.keyword]);
