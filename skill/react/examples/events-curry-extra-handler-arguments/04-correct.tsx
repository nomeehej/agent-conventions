import type {MouseEventHandler} from "react";

const handleListItemClick =
	(productId: string): MouseEventHandler<HTMLButtonElement> =>
	(_event) => {
		toggleSelection(productId);
	};
