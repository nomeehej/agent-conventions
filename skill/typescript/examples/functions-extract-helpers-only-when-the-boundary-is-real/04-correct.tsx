// page/profile/profile-page.tsx
const handleNextClick = () => {
// [!code ++]
	setPage((previous) => (previous + 1) % pageCount);
};
