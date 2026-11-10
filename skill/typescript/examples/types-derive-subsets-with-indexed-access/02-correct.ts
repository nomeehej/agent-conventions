// 이 예제의 원본 UserRecord: readonly id, 선택 name, email
/**
 * 사용자 미리보기 계약
 */
interface UserPreview {
	readonly id: UserRecord["id"];
	/**
	 * 목록에 표시할 이름
	 */
	name?: UserRecord["name"];
}
