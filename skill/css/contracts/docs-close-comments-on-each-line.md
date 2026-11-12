# Close Comments on Each Line

**Impact: MEDIUM (주석 모양과 폭이 TypeScript 주석과 같아 파일을 오가도 같은 자리에서 설명을 찾습니다)**

CSS에는 `//` 줄 주석이 없어 `/* */`만 씁니다.
여러 줄에 걸친 블록 주석은 쓰지 않고 줄마다 `/* … */`로 닫습니다.
한 줄 설명은 그 블록 바로 위 `/* 설명 */` 한 줄입니다.
어투와 낱말은 `typescript/docs-write-comments-about-purpose-and-constraints`를 따릅니다.

### 상자

설명이 두 줄 이상이거나 스타일시트를 구역으로 나눌 때는 상자를 씁니다.
위아래 줄은 `/* ` 뒤 대시 85개와 ` */`로 TypeScript 주석 상자와 같은 91칸입니다.
안쪽 첫 줄은 제목이고 덧붙일 내용은 다음 줄부터 문장으로 쓰되 줄마다 `/* … */`로 닫습니다.
항목은 `/*   이름 */` 줄 다음에 `/*      설명 */` 줄로 씁니다.
TypeScript 상자에서 빈 `//` 줄이 오는 자리에는 아무 줄도 두지 않습니다.
빈 주석은 `comment-no-empty`에 걸립니다.

| 자리 | 모양 |
| --- | --- |
| 한 줄 설명 | 그 블록 바로 위 `/* 설명 */` 한 줄 |
| 두 줄 이상의 설명, 구역 구분 | 위아래 대시 줄 사이에 `/* 제목 */`, `/* 본문 문장 */`을 줄마다 닫아 씁니다. 구역 구분은 제목 한 줄로 충분합니다 |
| 여러 줄에 걸친 `/* … */` | 쓰지 않습니다 |
| 빈 주석 `/* */` | 쓰지 않습니다 |
| `stylelint-disable` 같은 도구 지시 | 그 도구의 꼴을 따릅니다 |

줄마다 닫은 상자는 주석이 앞 주석 바로 뒤에 붙습니다.
stylelint `comment-empty-line-before`의 `ignore`에 `"after-comment"`를 더해야 이 상자가 통과합니다.
설정은 `tooling-configure-stylelint-to-enforce-these-rules`가 정합니다.

참고: [stylelint comment-empty-line-before](https://stylelint.io/user-guide/rules/comment-empty-line-before/),
[stylelint comment-no-empty](https://stylelint.io/user-guide/rules/comment-no-empty/),
[Black 문서: 줄 길이 90 안팎이 알맞다](https://black.readthedocs.io/en/stable/the_black_code_style/current_style.html).

**Incorrect 1 (여러 줄에 걸친 블록 주석으로 구역을 설명합니다):**

```css
/* src/page/products/products-page.css */

/*
 * 목록 레이아웃, 왼쪽 분류 트리와 오른쪽 상품 표
 * 1024px 아래에서 한 열
 */
.productsPage__layout {
	display: grid;
	grid-template-columns: 220px 1fr;
}

@media (width < 1024px) {
	.productsPage__layout {
		grid-template-columns: 1fr;
	}
}
```

**Correct 1 (줄마다 닫은 상자로 구역을 설명합니다):**

```css
/* src/page/products/products-page.css */

/* ------------------------------------------------------------------------------------- */
/* 목록 레이아웃 */
/* 왼쪽에 분류 트리, 오른쪽에 상품 표를 둔다. */
/* 1024px 아래에서는 한 열로 쌓는다. */
/* ------------------------------------------------------------------------------------- */
.productsPage__layout {
	display: grid;
	grid-template-columns: 220px 1fr;
}

@media (width < 1024px) {
	.productsPage__layout {
		grid-template-columns: 1fr;
	}
}
```

> 나머지 예시와 예외는 [full rule](../rules/08-01-docs-close-comments-on-each-line.md)에 있습니다.
