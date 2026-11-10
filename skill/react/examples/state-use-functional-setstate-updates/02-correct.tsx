useEffect(() => {
	return subscribeToUserJoined((joinedUserId) => {
// [!code ++]
		setSelectedUserIds((currentUserIds) => [...currentUserIds, joinedUserId]);
	});
}, []);
