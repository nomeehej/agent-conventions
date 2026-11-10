import type {MouseEventHandler} from "react";

// [!code ++]
const handleListItemClick: MouseEventHandler<HTMLButtonElement> = (_event) => {
	toggleSelection();
};

// 저장은 mutation 콜백이 이어서 처리
// [!code ++]
const handleSaveButtonClick: MouseEventHandler<HTMLButtonElement> = (event) => {
	event.preventDefault();
};
