// 이미 있는 계약: UserRecord { id: string; name: string; email: string }
/**
 * 초대 일괄 발송. 수신자 필드가 UserRecord와 일치, 별도 타입 없음
 */
export const sendInvites = (recipients: UserRecord[]): Promise<void> => {
	return client.post("/invites", recipients);
};
