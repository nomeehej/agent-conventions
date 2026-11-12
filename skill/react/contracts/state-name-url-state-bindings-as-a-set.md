# Name URL State Bindings as a Set

**Impact: MEDIUM (주소가 소유한 상태, 플랫폼 객체, 서버 응답이 이름만으로 구분됩니다)**

라우트 search 파라미터는 파싱 전 원본, 파싱 결과, 서버 응답이 구분되도록 이름을 고정합니다.
파서를 앱이 소유할지 라우트 정의가 소유할지는 쓰는 라우터와 URL 상태 라이브러리가 정합니다.
예제는 앱이 파서를 소유하는 경우를 nuqs로 적습니다.

| 대상 | 이름과 위치 |
| --- | --- |
| 파라미터별 파싱 함수 묶음 | `urlParsers`. 한 파일만 읽으면 그 파일 위쪽에 두고 둘 이상의 파일이 읽으면 소유자 `_constant/url-parsers.ts`에 둡니다. 경로가 범위를 드러내므로 이름에 반복하지 않습니다 |
| 라우터가 라우트마다 검증하는 search 스키마 | 라우트 정의에 둡니다. 같은 값을 읽으려고 `urlParsers`를 따로 만들지 않습니다 |
| 파싱 결과 | `urlParams`. 라우터의 search 훅이 돌려준 값도 같은 이름입니다 |
| 갱신 함수 | `setUrlParams`. 라우터의 이동 API에 `search`를 넘겨 바꾸면 따로 이름 붙일 함수가 없습니다 |
| 플랫폼 `URLSearchParams` 객체 | `searchParams`. 파싱 결과에는 쓰지 않습니다 |

한 소유자에 묶음이 둘이면 `<범위>UrlParsers`로 가릅니다.
`query`가 들어간 이름은 `data-name-query-and-mutation-bindings-consistently`에 따라 서버 요청 바인딩에만 씁니다.
값을 주소에 둘지는 `state-choose-state-tools-by-source-of-truth`로 판단합니다.

참고: [nuqs 문서: 어댑터](https://nuqs.dev/docs/adapters),
[TanStack Router 문서: search
파라미터](https://tanstack.com/router/latest/docs/framework/react/guide/search-params).

**Requires selected:** `typescript/naming-place-owner-constants-in-the-owner-constant-folder` (함께 적용)

**Incorrect 1 (파서 묶음의 역할이 이름에 드러나지 않습니다):**

```ts
// page/products/_constant/product-search.ts: 목록 화면과 필터 대화상자가 사용
export const productSearch = {
	page: parseAsInteger.withDefault(pagination_default_page),
	keyword: parseAsString,
};
```

**Correct 1 (두 파일이 읽는 파서 묶음은 `urlParsers`로 소유자 `_constant` 폴더에 둡니다):**

```ts
// page/products/_constant/url-parsers.ts: 목록 화면과 필터 대화상자가 사용
export const urlParsers = {
	page: parseAsInteger.withDefault(pagination_default_page),
	keyword: parseAsString,
};
```

> 나머지 예시와 예외는 [full rule](../rules/08-06-state-name-url-state-bindings-as-a-set.md)에 있습니다.
