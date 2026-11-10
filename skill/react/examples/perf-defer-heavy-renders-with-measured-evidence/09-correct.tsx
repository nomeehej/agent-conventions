const [isPending, startTransition] = useTransition();
// 조회 키가 page라 바뀌면 보이던 목록이 대체 화면으로 돌아감. 측정 없이 트랜지션으로 감쌈
// [!code ++]
const [urlParams, setUrlParams] = useQueryStates(urlParsers, {startTransition});

const responseProductListSuspense = useProductListSuspense({page: urlParams.page});

const handleNextPageButtonClick: MouseEventHandler<HTMLButtonElement> = (_event) => {
	void setUrlParams({page: urlParams.page + 1});
};

<Button disabled={isPending} onClick={handleNextPageButtonClick}>다음</Button>;
