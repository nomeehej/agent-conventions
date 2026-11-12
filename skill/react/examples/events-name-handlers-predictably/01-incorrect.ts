import type {MouseEventHandler} from "react";

// [!code error]
// 목록 항목과 저장 버튼 둘 다 클릭을 받는데 이름에 대상이 없어 뒤에 번호가 붙는다.
// [!code error]
const onClick: MouseEventHandler<HTMLButtonElement> = (_event) => {
	toggleSelection();
};

// 저장은 뮤테이션 콜백이 이어서 처리한다.
// [!code error]
const onClick2: MouseEventHandler<HTMLButtonElement> = (event) => {
	event.preventDefault();
};
