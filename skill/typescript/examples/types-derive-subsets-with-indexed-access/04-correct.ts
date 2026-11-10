// 이 예제의 원본: ProductRecord.id는 readonly, UserRecord.name은 선택 필드
/**
 * 상품 목록 한 행의 표시 계약
 */
interface ProductListRow {
	/**
	 * 상품 식별자
	 */
// [!code ++]
	readonly id: ProductRecord["id"];
	/**
	 * 마지막 수정자 이름. 원본이 선택 필드라 여기서도 선택
	 */
// [!code ++]
	ownerName?: UserRecord["name"];
}
