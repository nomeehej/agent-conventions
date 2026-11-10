const handleLinkCopyButtonClick: MouseEventHandler<HTMLButtonElement> = (_event) => {
	// 행 12,000개에서 필터 전환에 320ms, 클릭이 밀림
	startTransition(async () => {
		await navigator.clipboard.writeText(requestUrl.href);

		// await 뒤에는 트랜지션 범위가 끊김. 다시 감싸야 급하지 않은 갱신으로 남음
		startTransition(() => {
			setStatusFilter("all");
		});
	});
};
