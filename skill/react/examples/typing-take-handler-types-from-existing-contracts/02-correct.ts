import type {MouseEventHandler} from "react";

// 목록 JSX에 인라인 래퍼를 두지 않도록 행 id를 커링으로 고정한다.
const handleRowSelectToggle =
	(rowId: string): MouseEventHandler<HTMLButtonElement> =>
	(event) => {
		event.preventDefault();
		toggleSelection(rowId);
	};
