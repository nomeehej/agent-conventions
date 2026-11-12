// UserRecord { id: string; name: string; email: string }가 이미 있는 계약이다.
export const sendInvite = (draft: UserRecord): Promise<void> => {
	// …
};

// 폼은 이름을 비울 수 있고 id가 아직 없는데 타입을 맞추려고 빈 문자열을 넣는다.
sendInvite({ id: "", name: "", email });
