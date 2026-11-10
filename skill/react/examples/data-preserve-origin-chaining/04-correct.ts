useEffect(() => {
	if (responseProductSearchSuspense.data.items.length > 0) {
		return;
	}

	reportEmptySearch(urlParams.keyword);
}, [responseProductSearchSuspense.data, urlParams.keyword]);
