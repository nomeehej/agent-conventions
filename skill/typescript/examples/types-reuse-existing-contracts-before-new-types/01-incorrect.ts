// UserRecord { id: string; name: string; email: string }가 이미 있는 계약이다.
// 필드 이름, 타입, 선택 여부가 그대로인데 새 타입을 선언한다.
interface InviteRecipient {
	id: string;
	name: string;
	email: string;
}

export const sendInvites = (recipients: InviteRecipient[]): Promise<void> => {
	// …
};
