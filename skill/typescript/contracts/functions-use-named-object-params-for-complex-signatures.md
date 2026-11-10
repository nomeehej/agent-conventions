# Use Named Object Params for Complex Signatures

**Impact: MEDIUM (긴 시그니처를 읽기 쉽게 유지하고 인자 위치를 헷갈리지 않으면서 입력을 늘립니다)**

매개변수가 셋을 넘으면 위치 인자를 객체 하나로 묶습니다.
셋 이하여도 `page`, `pageSize`처럼 서로 바꿔 넣어도 컴파일되는 같은 타입 인자가 이웃하면 객체 하나로 묶습니다.
`clamp(value, max)`처럼 순서가 관례로 굳은 수학 함수는 위치 인자를 그대로 둡니다.
객체 매개변수 타입은 파일 위쪽에 이름을 붙여 선언합니다.
받은 객체는 `values-read-objects-through-chains`에 따라 구조분해하지 않고 체인으로 읽습니다.
뜻이 같은 계약이 이미 있으면 그대로 쓰고 규칙을 지키려고 `*Params`나 `*Args`를 새로 만들지 않습니다.
React 컴포넌트의 프롭스는 프레임워크 규칙이 정합니다.

**Incorrect 1 (위치 인자가 넷이라 호출부에서 순서를 외워야 합니다):**

```ts
const fetchProductPage = (baseUrl: string, page: number, pageSize: number, keyword?: string): Promise<ProductPage> => {
	/* … */
};

fetchProductPage(api_base_url, urlParams.page, pagination_default_page_size, undefined);
```

**Correct 1 (매개변수를 객체로 묶고 그 타입을 파일 위쪽에 이름 붙여 선언합니다):**

```ts
/**
 * 상품 목록 한 페이지 요청 조건
 */
interface ProductPageRequest {
	baseUrl: string;
	/**
	 * 1부터 세는 페이지 번호
	 */
	page: number;
	pageSize: number;
	/**
	 * 검색어. 비우면 전체 목록
	 */
	keyword?: string;
}

const fetchProductPage = (request: ProductPageRequest): Promise<ProductPage> => {
	return client.get(`${request.baseUrl}/products`, {
		params: {page: request.page, pageSize: request.pageSize, keyword: request.keyword},
	});
};

fetchProductPage({baseUrl: api_base_url, page: urlParams.page, pageSize: pagination_default_page_size});
```

> 나머지 예시와 예외는 [full rule](../rules/03-02-functions-use-named-object-params-for-complex-signatures.md)에 있습니다.
