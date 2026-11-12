// UserPreview가 따라가는 원본 계약이다.
interface UserRecord {
	readonly id: string;
	name?: string;
	email: string;
}

// [!code error]
type UserPreview = Pick<UserRecord, "id" | "name">;
