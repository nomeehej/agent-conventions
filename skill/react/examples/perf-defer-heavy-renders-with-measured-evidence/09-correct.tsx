const [isPending, startTransition] = useTransition();
// 조회 키 page 변경 시 보이던 목록이 대체 화면으로 복귀. 측정 없이 트랜지션 적용
// [!code ++]
const [urlParams, setUrlParams] = useQueryStates(urlParsers, {startTransition});

const responseProductListSuspense = useProductListSuspense({page: urlParams.page});

const handleNextPageButtonClick: MouseEventHandler<HTMLButtonElement> = (_event) => {
	void setUrlParams({page: urlParams.page + 1});
};

<Button disabled={isPending} onClick={handleNextPageButtonClick}>다음</Button>;
