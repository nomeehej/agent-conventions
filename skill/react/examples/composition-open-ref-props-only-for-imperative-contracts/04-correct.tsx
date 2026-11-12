// ----------------------------------------------------------------------------------------
// 검색 입력 명령
//
// 결과 목록이 포커스와 선택을 되돌릴 때 호출한다.
// ----------------------------------------------------------------------------------------
export interface SearchInputHandle {
	focusAndSelect: () => void;
}

export interface SearchInputProps {
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
