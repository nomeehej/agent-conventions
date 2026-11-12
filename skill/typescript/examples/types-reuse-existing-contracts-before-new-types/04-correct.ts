// 이미 있는 계약: UserRecord { id: string; name: string; email: string }

// ----------------------------------------------------------------------------------------
// 초대 폼 입력, id 없고 이름은 빈 값 허용 → UserRecord와 필드 조건 상이
//
// name: 표시 이름. 비우면 이메일 표시
// ----------------------------------------------------------------------------------------
interface InviteDraft {
	email: UserRecord["email"];
	name?: UserRecord["name"];
}

export const sendInvite = (draft: InviteDraft): Promise<void> => client.post("/invites", draft);
