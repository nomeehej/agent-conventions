// page/profile/profile-page.tsx
const handleNextPageButtonClick: MouseEventHandler<HTMLButtonElement> = (_event) => {
// [!code ++]
	setPage((previous) => (previous + 1) % pageCount);
};
