// 이 예제의 원본 UserRecord: readonly id, 선택 name, email
// [!code ++]
interface UserPreview {
	readonly id: UserRecord["id"];
	name?: UserRecord["name"];
}
