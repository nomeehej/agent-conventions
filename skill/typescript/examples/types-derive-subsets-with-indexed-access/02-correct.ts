// 이 예제의 원본 UserRecord는 readonly id, 선택 name, email이다.
// [!code ++]
interface UserPreview {
	readonly id: UserRecord["id"];
	name?: UserRecord["name"];
}
