# Configure Stylelint to Enforce These Rules

**Impact: MEDIUM (자동 검사 범위를 설정으로 고정하고 의미 판단은 리뷰에 남깁니다)**

### 규칙별 담당

`stylelint-config-standard`를 확장해 아래 규칙을 적용하고 기계가 확인하지 못하는 의미는 리뷰에서 판단합니다.

| Stylelint 규칙 | 담당 컨벤션 |
| --- | --- |
| `selector-class-pattern` | `css/naming-use-block-element-modifier-syntax` |
| `max-nesting-depth` | `css/selector-limit-nesting-block-depth` |
| `keyframes-name-pattern` | `css/a11y-namespace-keyframes-and-respect-reduced-motion` |
| `property-disallowed-list`, `custom-property-pattern` | `css/values-tokenize-repeated-visual-values`. 이름 패턴은 토큰 선언 파일에서만 켭니다 |
| `selector-attribute-name-disallowed-list` | `css/selector-use-pseudo-classes-for-dom-owned-states` |
| `selector-max-id` | `css/naming-use-block-element-modifier-syntax`. 선택은 클래스로만 합니다 |
| `selector-pseudo-class-disallowed-list` | `css/selector-do-not-negate-with-not` |
| `declaration-no-important` | `css/a11y-namespace-keyframes-and-respect-reduced-motion`의 전역 처리만 예외입니다 |
| `media-feature-range-notation` | `css/layout-write-breakpoints-desktop-first`의 범위 표기. 표준 설정에 포함됩니다 |
| `no-descending-specificity` | 자손 기본 블록을 조상 규칙보다 앞에 둡니다. 표준 설정에 포함됩니다 |

`selector-disallowed-list`는 다음 세 컨벤션을 담당합니다.

- `css/ownership-use-foreign-classes-only-under-your-own-root`
- `css/selector-nest-dom-state-in-the-owning-block`
- `css/selector-use-classes-instead-of-element-selectors`

`no-duplicate-selectors`는 `css/selector-declare-each-class-in-one-block`과
`css/selector-do-not-group-classes-with-commas`의 단독 재선언을 담당합니다.
라이브러리 클래스 접두사 목록 하나를 두 규칙이 함께 씁니다.
`selector-class-pattern`은 목록의 접두사를 문법 검사에서 뺍니다.
`selector-disallowed-list`는 목록의 접두사로 시작하는 최상위 선택자를 막습니다.
목록에 없는 라이브러리 클래스는 문법 위반으로 걸리므로 그 라이브러리의 접두사를 목록에 더합니다.
`selector-max-combinators`와 `selector-max-type`은 넣지 않습니다.
개수만으로 우리 선택자와 라이브러리 경로를 구분할 수 없습니다.

### 도구 한계와 리뷰

| 대상 | 도구 한계 | 처리 |
| --- | --- | --- |
| 쉼표 묶음 자체 | `disallowInList`는 단독 재선언만 검사합니다 | `css/selector-do-not-group-classes-with-commas`로 판단합니다 |
| 최상위 요소 선택자 | `ownMarkupPatterns`는 `&`로 시작하는 형태만 검사합니다 | `selector-max-type`은 쓰지 않고 리뷰에서 확인합니다 |
| 파일별 소유자 하나, 다른 소유자 클래스의 블록 위치 | 다른 소유자의 블록 이름은 우리 문법과 같아 구분하지 못합니다 | 리뷰에서 확인합니다 |
| 블록 이름에 넣은 레이어 이름 | `uiButton__root`도 문법에는 맞아 통과합니다 | 리뷰에서 확인합니다 |
| 앱 상태를 잡는 `data-*` 선택자 | 라이브러리도 `data-*`로 상태를 내므로 이름만으로는 구분하지 못합니다 | `css/selector-use-pseudo-classes-for-dom-owned-states`로 판단합니다 |
| 중첩 `@media`와 데스크톱 퍼스트 방향 | at-rule의 최상위 배치를 강제하지 못합니다 | `css/layout-group-breakpoints-at-the-file-bottom`으로 판단합니다 |
| 우리 마크업의 구조 선택자 | `:first-child`, `:nth-child()`는 클래스에도 붙습니다 | 표기만으로 구분하지 못해 리뷰에서 확인합니다 |
| 역할 이름, 승격 판단, 변형 노출, 포커스 대비 | 기계가 뜻을 판단하지 못합니다 | 리뷰에서 확인합니다 |

**Correct (라이브러리 접두사 목록 하나로 우리 클래스 문법과 최상위 금지를 함께 정합니다):**

```js
/**
 * 우리가 이름을 정하지 않는 라이브러리 클래스의 접두사
 * 목록에 없는 라이브러리 클래스는 우리 문법 검사에 걸리므로 여기에 더함
 */
const libraryClassPrefixes = ["ant-", "rc-", "tippy-", "Mui"];

/**
 * 라이브러리 클래스는 통과, 나머지는 우리 문법만 통과
 */
const ownClassPattern = [
	"^(?:",
	`(?:${libraryClassPrefixes.join("|")}).*`,
	"|",
	// block__element 또는 block__element--modifier
	"[a-z][a-zA-Z0-9]*__[a-z][a-zA-Z0-9]*(?:--[a-z][a-zA-Z0-9]*)?",
	")$",
].join("");

/**
 * 우리가 마크업을 쓰는 자리에서 금지되는 형태
 */
const ownMarkupPatterns = [
	// 상태 가상 클래스를 최상위 선택자로 다시 여는 것
	/^\.[\w-]+:(hover|focus|focus-visible|focus-within|active|enabled|disabled|checked|visited)/,
	// 중첩 안에서 요소 선택자로 우리 마크업을 잡는 것
	// 우리가 쓰지 않는 마크업은 stylelint-disable 주석으로 예외 표시
	/^&\s*[>+~]?\s*[a-z]/,
];

export default {
	extends: ["stylelint-config-standard"],
	rules: {
		// 최상위 @media 안의 클래스는 깊이 0. 브레이크포인트 안에서 상태를 한 겹 더 쓸 수 있음
		"max-nesting-depth": [1, {ignoreAtRules: ["media", "supports", "container"]}],
		// @keyframes 이름은 전역이라 소유자 블록 이름 필수. 하이픈은 클래스 --수정자 표기와 섞여 금지
		"keyframes-name-pattern": "^[a-z][a-zA-Z0-9]*__[a-z][a-zA-Z0-9]*$",
		// 쉼표 목록에 든 선택자를 아래에서 단독으로 다시 여는 것까지 검출
		"no-duplicate-selectors": [true, {disallowInList: true}],
		// 움직임 감소 전역 처리 외에는 금지
		"declaration-no-important": true,
		// 지역 변수 선언 금지. var() 소비는 허용
		"property-disallowed-list": ["/^--/"],
		// 우리 마크업의 상태는 수정자로 표현
		// 라이브러리가 상태를 data-*로 내는 경우가 있어 data-*는 이름으로 막지 않음
		"selector-attribute-name-disallowed-list": [/^aria-/],
		"selector-class-pattern": ownClassPattern,
		// 라이브러리 클래스는 최상위에서 잡지 않고 내 최상위 블록 안에서 &로 시작
		"selector-disallowed-list": [
			[...libraryClassPrefixes.map((prefix) => new RegExp(`^\\.${prefix}`)), ...ownMarkupPatterns],
			{splitList: true},
		],
		"selector-max-id": 0,
		// 부정 조건은 기본 블록으로 뒤집음. 남의 마크업만 stylelint-disable로 허용
		"selector-pseudo-class-disallowed-list": ["not"],
	},
	overrides: [
		{
			// 전역 스타일시트는 우리 클래스 문법 대상 아님
			files: ["src/style/**/*.css", "src/*.css"],
			rules: {
				"selector-class-pattern": null,
				"keyframes-name-pattern": null,
				"property-disallowed-list": null,
				// 움직임 감소 전역 처리는 여기서만
				"declaration-no-important": null,
			},
		},
		{
			// 전역 토큰 파일에만 이름 강제
			files: ["src/style/token.css"],
			rules: {
				"selector-class-pattern": null,
				"property-disallowed-list": null,
				// var() 사용까지 검사하므로 외부 변수를 소비하는 파일에는 쓰지 않음
				"custom-property-pattern": "^app-[a-z0-9-]+$",
			},
		},
	],
};
```

> 나머지 예시와 예외는 [full rule](../rules/08-01-tooling-configure-stylelint-to-enforce-these-rules.md)에 있습니다.
