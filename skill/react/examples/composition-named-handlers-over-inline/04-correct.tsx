import type {MouseEventHandler} from "react";

const [isOpen, setIsOpen] = useState(false);

const handleOpenButtonClick: MouseEventHandler<HTMLButtonElement> = (_event) => {
	setIsOpen(true);
};

// [!code ++]
<Button onClick={handleOpenButtonClick}>열기</Button>;
