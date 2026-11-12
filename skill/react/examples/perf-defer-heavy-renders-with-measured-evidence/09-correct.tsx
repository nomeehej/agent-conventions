const [isPending, startTransition] = useTransition();
const [urlParams, setUrlParams] = useQueryStates(urlParsers);

const responseProductListSuspense = useProductListSuspense({page: urlParams.page});

const handleNextPageButtonClick: MouseEventHandler<HTMLButtonElement> = (_event) => {
	// 조회 키 page가 바뀌면 보이던 목록이 대체 화면으로 돌아가 측정 없이 트랜지션을 적용한다.
// [!code ++]
	startTransition(() => {
// [!code ++]
		void setUrlParams({page: urlParams.page + 1});
// [!code ++]
	});
};

<Button disabled={isPending} onClick={handleNextPageButtonClick}>다음</Button>;
