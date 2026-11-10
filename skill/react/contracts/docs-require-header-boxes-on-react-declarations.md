# Require Header Boxes on React Hooks, Handlers, and Key Declarations

**Impact: MEDIUM (공통 문서화 기준에 React 전용 선언을 추가해 누락을 막습니다)**

`typescript/docs-require-header-boxes-on-key-declarations`의 필수 대상에 아래 React 선언을 추가합니다.
상자는 선언 바로 위에 둡니다.
모양과 낱말은 `typescript/docs-write-korean-comments-about-purpose-and-constraints`를 따릅니다.

| 추가 대상 | 조건 |
| --- | --- |
| 합성 컴포넌트 | 공개 부품 |
| 이벤트 핸들러, `useEffect` | 본문에 분기, `await`, 쿼리 무효화, 화면 이동, 저장 같은 부수효과 호출이 있음. 동작이 하나뿐이어도 포함합니다 |

**Requires selected:** `typescript/docs-require-header-boxes-on-key-declarations` (함께 적용)

**Incorrect 1 (주요 경계 선언에 의도 설명이 없습니다):**

```ts
const handleBackButtonClick: MouseEventHandler<HTMLButtonElement> = (_event) => {
	void navigate("/products");
};

useEffect(() => {
	return subscribeToProductChanges(watchedProductIds);
}, [watchedProductIds]);
```

**Correct 1 (선언 의도를 바로 위 상자에 적습니다):**

```ts
// ----------------------------------------------------------------------------------------
// 저장하지 않고 목록으로 이동
//
// 입력 중인 값은 폐기
// ----------------------------------------------------------------------------------------
const handleBackButtonClick: MouseEventHandler<HTMLButtonElement> = (_event) => {
	void navigate("/products");
};

// ----------------------------------------------------------------------------------------
// 표에 보이는 상품의 변경 알림 구독
//
// 목록이 바뀌면 재구독
// ----------------------------------------------------------------------------------------
useEffect(() => {
	return subscribeToProductChanges(watchedProductIds);
}, [watchedProductIds]);
```

> 나머지 예시와 예외는 [full rule](../rules/12-01-docs-require-header-boxes-on-react-declarations.md)에 있습니다.
