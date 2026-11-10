// 원본 계약
interface UserRecord {
	readonly id: string;
	name?: string;
	email: string;
}

// ----------------------------------------------------------------------------------------
// 사용자 미리보기 계약
//
// name: 목록에 표시할 이름
// ----------------------------------------------------------------------------------------
// [!code error]
type UserPreview = Pick<UserRecord, "id" | "name">;
