// 원본 계약
interface UserRecord {
	readonly id: string;
	name?: string;
	email: string;
}

// [!code error]
type UserPreview = Pick<UserRecord, "id" | "name">;
