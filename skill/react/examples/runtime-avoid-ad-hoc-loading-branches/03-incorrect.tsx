if (responseUserGetItemSuspense.isFetching) {
	return <Spinner />;
}

return <UserCardName value={responseUserGetItemSuspense.data.name} />;
