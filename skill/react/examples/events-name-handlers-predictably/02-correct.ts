import type {MouseEventHandler} from "react";

// [!code ++]
const handleListItemClick: MouseEventHandler<HTMLButtonElement> = (_event) => {
	toggleSelection();
};

// 저장은 뮤테이션 콜백이 이어서 처리한다.
// [!code ++]
const handleSaveButtonClick: MouseEventHandler<HTMLButtonElement> = (event) => {
	event.preventDefault();
};
