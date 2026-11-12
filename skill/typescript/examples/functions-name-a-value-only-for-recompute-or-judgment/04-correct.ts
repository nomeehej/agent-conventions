const toNextPage = (page: number): number => {
// [!code ++]
	return page + 1;
};

const formatRowLabel = (row: Row): string => {
// [!code ++]
	return `${row.name} (${row.id})`;
};
