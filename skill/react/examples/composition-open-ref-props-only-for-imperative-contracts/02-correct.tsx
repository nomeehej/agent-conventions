import type {ChangeEventHandler, Ref} from "react";

// ----------------------------------------------------------------------------------------
// 검색 입력 계약
//
// 결과 목록이 검색어로 포커스를 되돌려야 하므로 `ref`를 공개한다.
//
// 이름은 보이는 라벨을 둘 수 없어 `aria-label`로만 제공한다.
// ----------------------------------------------------------------------------------------
export interface SearchInputProps {
	ref?: Ref<HTMLInputElement>;
	label: string;
	value: string;
	onChange: ChangeEventHandler<HTMLInputElement>;
}

export const SearchInput = (props: SearchInputProps) => (
		<input
			ref={props.ref}
			aria-label={props.label}
			onChange={props.onChange}
			value={props.value}
		/>
	);
