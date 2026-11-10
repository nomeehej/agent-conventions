/**
 * 검색 입력이 밖에 여는 명령. 결과 목록이 포커스와 선택을 되돌릴 때 호출
 */
export interface SearchInputHandle {
	focusAndSelect: () => void;
}

export interface SearchInputProps {
	/**
	 * 명령 계약. 사용처가 포커스를 되돌릴 때만 전달
	 */
	ref?: Ref<SearchInputHandle>;
}

export const SearchInput = (props: SearchInputProps) => {
	const inputRef = useRef<HTMLInputElement>(null);

	useImperativeHandle(props.ref, () => ({
		focusAndSelect: () => {
			inputRef.current?.focus();
			inputRef.current?.select();
		},
	}));

	return <input ref={inputRef} className={clsx("searchInput__root")} aria-label="검색어" />;
};
