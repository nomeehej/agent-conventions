// ----------------------------------------------------------------------------------------
// 클래스 이름 검사
//
// 목록에 없는 라이브러리 클래스는 우리 문법 검사에 걸리므로 접두사를 추가한다.
//
//   libraryClassPrefixes
//      우리가 이름을 정하지 않는 라이브러리 클래스의 접두사다.
//
//   ownClassPattern
//      라이브러리 클래스는 통과시키고 나머지는 우리 문법만 통과시킨다.
//
//   ownMarkupPatterns
//      우리가 마크업을 쓰는 자리에서 금지되는 형태다.
// ----------------------------------------------------------------------------------------
const libraryClassPrefixes = ["ant-", "rc-", "tippy-", "Mui"];
const ownClassPattern = [
	"^(?:",
	`(?:${libraryClassPrefixes.join("|")}).*`,
	"|",

	// 클래스는 block__element 또는 block__element--modifier 형태를 따른다.
	"[a-z][a-zA-Z0-9]*__[a-z][a-zA-Z0-9]*(?:--[a-z][a-zA-Z0-9]*)?",
	")$",
].join("");
const ownMarkupPatterns = [
	// 상태 가상 클래스를 최상위 선택자로 다시 여는 것을 금지한다.
	/^\.[\w-]+:(hover|focus|focus-visible|focus-within|active|enabled|disabled|checked|visited)/,

	// 중첩 안에서 요소 선택자로 우리 마크업을 잡는 것을 금지한다.
	// 우리가 쓰지 않는 마크업은 stylelint-disable 주석으로 예외를 표시한다.
	/^&\s*[>+~]?\s*[a-z]/,
];

export default {
	extends: ["stylelint-config-standard"],
	rules: {
		// 최상위 @media 안의 클래스는 깊이 0이므로
		// 브레이크포인트 안에서 상태를 한 겹 더 쓸 수 있다.
		"max-nesting-depth": [1, {ignoreAtRules: ["media", "supports", "container"]}],

		// @keyframes 이름은 전역 범위라서 소유자 블록 이름이 필수이다.
		// 하이픈은 클래스 --수정자 표기와 헷갈리므로 금지한다.
		"keyframes-name-pattern": "^[a-z][a-zA-Z0-9]*__[a-z][a-zA-Z0-9]*$",

		// 쉼표 목록에 든 선택자를 아래에서 단독으로 다시 여는 것까지 검출한다.
		"no-duplicate-selectors": [true, {disallowInList: true}],

		// 움직임 감소 전역 처리 외에는 금지한다.
		"declaration-no-important": true,

		// 지역 변수 선언은 금지하고 var() 소비는 허용한다.
		"property-disallowed-list": ["/^--/"],

		// 우리 마크업의 상태는 수정자로 표현한다.
		// 라이브러리가 상태를 data-*로 내는 경우가 있으므로 data-*는 이름으로 막지 않는다.
		"selector-attribute-name-disallowed-list": [/^aria-/],
		"selector-class-pattern": ownClassPattern,

		// 라이브러리 클래스는 최상위에서 잡지 않고 내 최상위 블록 안에서 &로 시작한다.
		"selector-disallowed-list": [
			[...libraryClassPrefixes.map((prefix) => new RegExp(`^\\.${prefix}`)), ...ownMarkupPatterns],
			{splitList: true},
		],
		"selector-max-id": 0,

		// 중첩 안의 선택자는 &로 시작하고 쉼표 목록의 각 선택자를 따로 검사한다.
		"selector-nested-pattern": ["^&", {splitList: true}],

		// 부정 조건은 기본 블록으로 전환하고 남의 마크업만 stylelint-disable로 허용한다.
		"selector-pseudo-class-disallowed-list": ["not"],

		// 줄마다 닫은 주석 상자를 허용하므로 앞 주석 바로 뒤의 주석은 빈 줄 검사에서 제외한다.
		"comment-empty-line-before": ["always", {except: ["first-nested"], ignore: ["stylelint-commands", "after-comment"]}],
	},
	overrides: [
		{
			// 전역 스타일시트는 우리 클래스 문법 대상에서 제외한다.
			files: ["src/style/**/*.css", "src/*.css"],
			rules: {
				"selector-class-pattern": null,
				"keyframes-name-pattern": null,
				"property-disallowed-list": null,

				// 움직임 감소 전역 처리는 여기서만 허용한다.
				"declaration-no-important": null,
			},
		},
		{
			// 이름 규칙은 전역 토큰 파일에만 강제한다.
			files: ["src/style/token.css"],
			rules: {
				"selector-class-pattern": null,
				"property-disallowed-list": null,

				// 외부 변수를 소비하는 파일에는 쓰지 않고 var() 사용까지 검사한다.
				"custom-property-pattern": "^app-[a-z0-9-]+$",
			},
		},
	],
};
