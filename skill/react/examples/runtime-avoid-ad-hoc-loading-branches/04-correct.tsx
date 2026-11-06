return (
	<Fragment>
		<UserCardName value={responseUserGetItemSuspense.data.name} />
		{responseUserGetItemSuspense.isFetching && <RefreshIndicator />}
	</Fragment>
);
