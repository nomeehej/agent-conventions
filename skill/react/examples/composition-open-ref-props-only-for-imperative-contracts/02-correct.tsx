import type {ChangeEventHandler, Ref} from "react";

/**
 * 검색 입력 계약
 *
 *   - `ref` 공개. 결과 목록이 검색어로 포커스 복귀 필요
 *   - 이름은 `aria-label`로만 제공. 보이는 라벨 배치 불가
 */
export interface SearchInputProps {
	/**
	 * 사용처가 포커스를 옮길 때 쓰는 참조
	 */
	ref?: Ref<HTMLInputElement>;
	/**
	 * 스크린 리더가 읽을 이름
	 */
	label: string;
	value: string;
	onChange: ChangeEventHandler<HTMLInputElement>;
}

export const SearchInput = (props: SearchInputProps) => {
	return (
		<input
			ref={props.ref}
			aria-label={props.label}
			onChange={props.onChange}
			value={props.value}
		/>
	);
};
