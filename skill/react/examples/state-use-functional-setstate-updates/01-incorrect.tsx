useEffect(() => {
// [!code error]
	// 콜백이 등록 시점의 selectedUserIds를 붙잡는다.
// [!code error]
	// 나중에 도착한 참여자가 옛 목록에 더해져 그사이 고른 항목이 지워진다.
	return subscribeToUserJoined((joinedUserId) => {
// [!code error]
		setSelectedUserIds([...selectedUserIds, joinedUserId]);
	});
}, []);
