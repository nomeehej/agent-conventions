// UserRecord { id: string; name: string; email: string }가 이미 있는 계약이다.

// ----------------------------------------------------------------------------------------
// 초대 폼 입력
//
// id가 없고 이름은 빈 값을 허용하므로 UserRecord와 필드 조건이 다르다.
//
//   name
//      표시 이름이다. 비우면 이메일을 표시한다.
// ----------------------------------------------------------------------------------------
interface InviteDraft {
	email: UserRecord["email"];
	name?: UserRecord["name"];
}

export const sendInvite = (draft: InviteDraft): Promise<void> => client.post("/invites", draft);
