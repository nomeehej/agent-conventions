const [urlParams, setUrlParams] = useQueryStates(urlParsers);

const responseProductListSuspense = useProductListSuspense({page: urlParams.page});

const handleNextPageButtonClick: MouseEventHandler<HTMLButtonElement> = (_event) => {
// [!code error]
	void setUrlParams({page: urlParams.page + 1});
};

<Button onClick={handleNextPageButtonClick}>다음</Button>;
