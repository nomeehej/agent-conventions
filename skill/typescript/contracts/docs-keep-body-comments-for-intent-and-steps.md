# Keep Body Comments for Intent and Steps

**Impact: MEDIUM (코드를 옮겨 적은 주석은 막고 읽는 데 필요한 설명은 남깁니다)**

함수와 컴포넌트 본문의 주석에는 코드가 말하지 못하는 이유와 긴 본문의 구획만 적습니다.
한 줄 `//`는 바로 아래 한 줄에만 해당하는 이유를 적는 자리입니다.
도메인 규칙, 예외 방어, 외부 API 제약, 부수효과 순서가 그런 이유입니다.
규칙이 허용한 예외의 `// 예외: …`도 같은 자리입니다.
여러 구획을 한 본문에 둔 긴 함수, 컴포넌트는 구획마다 상자를 두고 제목을 적습니다.
빈 줄로 나눈 단계만으로 흐름이 읽히는 짧은 본문에는 구획 상자를 두지 않습니다.

| 자리 | 주석 형태 |
| --- | --- |
| 한 줄에만 해당하는 이유 | 그 줄 바로 위 `//` 한 줄. 이유 하나를 문장으로 적습니다 |
| 긴 본문의 구획 | 구획 첫 줄 바로 위 상자. 제목만 두는 것이 기본이고 구획 전체에 걸린 이유가 있으면 본문 문장을 더합니다 |
| 번호 붙인 단계 주석(`// 1. …`) | 쓰지 않습니다. 긴 본문이면 구획 상자로, 짧은 본문이면 이유만 남긴 `//` 한 줄로 바꿉니다 |
| 도구 지시 | `// biome-ignore`처럼 도구가 정한 꼴로 그 줄 바로 위에 둡니다 |
| 한 줄 주석 앞 | 앞 줄이 코드면 빈 줄 하나를 둡니다. 블록, 객체, 배열의 첫 줄, JSX 여는 태그 안, 앞 줄이 주석인 줄은 예외 |
| 테스트 사례의 준비, 실행, 검증 구간 | 테스트 규칙이 정한 한 줄 구간 주석을 따릅니다. 구획 상자를 두지 않습니다 |
| JSX 자식 | JSX 자식에는 주석을 두지 않습니다. 구역 설명 자리는 프레임워크 규칙이 정합니다 |

상자를 둘 자리는 `docs-put-boxes-on-groups-and-blocks`가 정합니다.
상자 모양과 문장은 `docs-write-comments-about-purpose-and-constraints`가 정합니다.
허용된 예외의 이유는 `docs-justify-convention-exceptions-with-a-reason-comment`가 정합니다.

참고: [Google 코드 리뷰 가이드: 주석](https://google.github.io/eng-practices/review/reviewer/looking-for.html#comments),
[Google TypeScript 가이드: JSDoc과 주석](https://google.github.io/styleguide/tsguide.html#jsdoc-versus-comments).

**Incorrect 1 (지역 선언에 코드를 옮겨 적은 주석을 답니다):**

```ts
const filterMatchedProducts = (products: Product[], keyword: string) => {
	// keyword를 소문자로 변환
	const lowerKeyword = keyword.trim().toLowerCase();

	return products.filter((product) => product.name.toLowerCase().includes(lowerKeyword));
};
```

**Correct 1 (선언 이름이 이미 드러내는 내용만 적은 주석은 지웁니다):**

```ts
const filterMatchedProducts = (products: Product[], keyword: string) => {
	const lowerKeyword = keyword.trim().toLowerCase();

	return products.filter((product) => product.name.toLowerCase().includes(lowerKeyword));
};
```

> 나머지 예시와 예외는 [full rule](../rules/06-01-docs-keep-body-comments-for-intent-and-steps.md)에 있습니다.
