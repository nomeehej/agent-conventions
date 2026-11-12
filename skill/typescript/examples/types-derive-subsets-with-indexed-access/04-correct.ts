// 이 예제의 원본에서 ProductRecord.id는 readonly이고 UserRecord.name은 선택 필드다.

// ----------------------------------------------------------------------------------------
// 상품 목록 한 행의 표시 계약
//
//   ownerName
//      마지막 수정자 이름이다.
// ----------------------------------------------------------------------------------------
interface ProductListRow {
// [!code ++]
	readonly id: ProductRecord["id"];
// [!code ++]
	ownerName?: UserRecord["name"];
}
