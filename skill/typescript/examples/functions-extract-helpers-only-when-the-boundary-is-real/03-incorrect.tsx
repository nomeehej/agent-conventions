// page/profile/profile-page.tsx
// [!code error]
// (previous + 1) % pageCount 한 줄을 page/profile/_function/get-next-page.ts로 옮겼다.
// [!code error]
import {getNextPage} from "@/page/profile/_function/get-next-page";

const handleNextPageButtonClick: MouseEventHandler<HTMLButtonElement> = (_event) => {
// [!code error]
	setPage((previous) => getNextPage(previous, pageCount));
};
