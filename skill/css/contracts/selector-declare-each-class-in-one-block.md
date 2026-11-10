# Declare Each Class in One Block

**Impact: MEDIUM (한 클래스의 선언을 한 블록에서 확인하고 수정합니다)**

한 클래스의 선언은 파일 안 한 블록에 모읍니다.
같은 클래스를 여러 곳에서 다시 열어 선언 순서로 덮어쓰지 않습니다.

| 형태 | 판정 |
| --- | --- |
| 기본 클래스와 수정자 | 서로 다른 클래스이므로 각자 블록을 둡니다. 명시도가 같으므로 수정자 블록은 기본 클래스 블록 뒤에 둡니다. 린트가 순서를 잡지 못합니다 |
| 쉼표로 묶어 선언을 나눔 | `selector-do-not-group-classes-with-commas` 규칙이 금지합니다 |
| `@media`, `@supports`, `@container` 안의 재선언 | 조건이 다른 별개 블록이므로 허용합니다 |

조건 블록의 위치는 `layout-group-breakpoints-at-the-file-bottom`을 따릅니다.
기계 검사는 `no-duplicate-selectors`가 담당합니다.

참고: [stylelint no-duplicate-selectors](https://stylelint.io/user-guide/rules/no-duplicate-selectors/),
[MDN: 캐스케이드의 출현 순서](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Cascade/Introduction).

**Incorrect 1 (같은 클래스를 파일 두 곳에서 열어 선언 순서에 의존합니다):**

```css
.productsPage__toolbar {
	display: flex;
	gap: 12px;
	padding: 8px;
}

.productsPage__row {
	background: #f5f5f5;
}

.productsPage__toolbar {
	padding: 12px 16px;
}
```

**Correct 1 (한 블록에 모으고 최종 값만 남깁니다):**

```css
.productsPage__toolbar {
	display: flex;
	gap: 12px;
	padding: 12px 16px;
}

.productsPage__row {
	background: #f5f5f5;
}
```

> 나머지 예시와 예외는 [full rule](../rules/04-04-selector-declare-each-class-in-one-block.md)에 있습니다.
