// 이미 있는 계약: UserRecord { id: string; name: string; email: string }
export const sendInvite = (draft: UserRecord): Promise<void> => { /* … */ };

// 폼은 이름을 비울 수 있고 id가 아직 없음
// 빈 문자열을 입력해야 타입 일치
sendInvite({ id: "", name: "", email });
