# Require Header Boxes on Key Declarations

**Impact: MEDIUM (구현을 읽기 전에 중요한 경계를 찾고 설명할 수 있습니다)**

중요한 선언에는 구현을 읽기 전에 역할과 경계를 알 수 있도록 바로 위에 헤더 상자를 둡니다.
빈 상자나 영문 제목만으로는 요구를 충족하지 못하며 실제 한국어 설명이 필요합니다.
헤더에는 이름을 옮기지 않고 이름에 없는 형식, 단위, 범위, 부수효과, 엔드포인트를 적습니다.
상자 모양과 낱말은 `docs-write-korean-comments-about-purpose-and-constraints`가 정합니다.

| 헤더 상자 대상 | 조건 |
| --- | --- |
| 이름 붙인 쿼리, 뮤테이션, 원격 함수, 커스텀 훅, 스토어 | 모두 작성합니다 |
| 포매터 | 표시 문자열을 만들 때 작성합니다 |
| 핸들러, 이펙트 | 본문에 분기, `await`, 쿼리 무효화, 화면 이동, 저장 같은 부수효과 호출 중 하나라도 있으면 작성합니다 |
| 보조 함수 | 재사용하거나 내보내면 작성합니다 |
| 커스텀 `type`, `interface` | 내보내기 여부와 무관하게 `types-document-custom-types-and-shapes`를 따릅니다 |
| 파일 위 상수 | 이름에 없는 단위, 범위, 출처가 있으면 작성합니다. 이어진 상수 묶음은 상자 하나에 상수마다 정의 목록 한 줄을 씁니다 |

**Requires selected:** `docs-write-korean-comments-about-purpose-and-constraints` (함께 적용)

**Incorrect 1 (주요 선언에 헤더 설명이 없습니다):**

```ts
export const toSortedUserIds = (userIds: string[]): string[] => {
	return uniq(userIds).toSorted();
};

const responseProductList = useProductList();
```

**Correct 1 (선언 바로 위 상자에 이름에 없는 정보를 적습니다):**

```ts
// ----------------------------------------------------------------------------------------
// 요청 순서 고정
// ----------------------------------------------------------------------------------------
export const toSortedUserIds = (userIds: string[]): string[] => {
	return uniq(userIds).toSorted();
};

// ----------------------------------------------------------------------------------------
// 상품 목록 조회
//
// 로딩과 오류는 이 응답 객체로만 판단
//
// 엔드포인트: /api/product
// ----------------------------------------------------------------------------------------
const responseProductList = useProductList();
```

> 나머지 예시와 예외는 [full rule](../rules/06-02-docs-require-header-boxes-on-key-declarations.md)에 있습니다.
