if (responseUserGetItemSuspense.isPending) {
	return <Spinner />;
}

return <UserCardName value={responseUserGetItemSuspense.data.name} />;
