// UserRecord { id: string; name: string; email: string }가 이미 있는 계약이다.

// ----------------------------------------------------------------------------------------
// 초대 일괄 발송
//
// 수신자 필드가 UserRecord와 일치하므로 별도 타입을 만들지 않는다.
// ----------------------------------------------------------------------------------------
export const sendInvites = (recipients: UserRecord[]): Promise<void> => client.post("/invites", recipients);
