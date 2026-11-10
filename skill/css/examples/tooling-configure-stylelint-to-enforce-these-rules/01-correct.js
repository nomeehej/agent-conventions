/**
 * 우리가 이름을 정하지 않는 라이브러리 클래스의 접두사
 * 목록에 없는 라이브러리 클래스는 우리 문법 검사에 걸림, 여기에 추가
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
		// @keyframes 이름은 전역 범위, 소유자 블록 이름 필수. 하이픈 금지, 클래스 --수정자 표기와 혼동
		"keyframes-name-pattern": "^[a-z][a-zA-Z0-9]*__[a-z][a-zA-Z0-9]*$",
		// 쉼표 목록에 든 선택자를 아래에서 단독으로 다시 여는 것까지 검출
		"no-duplicate-selectors": [true, {disallowInList: true}],
		// 움직임 감소 전역 처리 외에는 금지
		"declaration-no-important": true,
		// 지역 변수 선언 금지. var() 소비는 허용
		"property-disallowed-list": ["/^--/"],
		// 우리 마크업의 상태는 수정자로 표현
		// data-*는 이름으로 막지 않음, 라이브러리가 상태를 data-*로 내는 경우 존재
		"selector-attribute-name-disallowed-list": [/^aria-/],
		"selector-class-pattern": ownClassPattern,
		// 라이브러리 클래스는 최상위에서 잡지 않고 내 최상위 블록 안에서 &로 시작
		"selector-disallowed-list": [
			[...libraryClassPrefixes.map((prefix) => new RegExp(`^\\.${prefix}`)), ...ownMarkupPatterns],
			{splitList: true},
		],
		"selector-max-id": 0,
		// 중첩 안의 선택자는 &로 시작. 쉼표 목록의 각 선택자를 따로 검사
		"selector-nested-pattern": ["^&", {splitList: true}],
		// 부정 조건은 기본 블록으로 전환. 남의 마크업만 stylelint-disable로 허용
		"selector-pseudo-class-disallowed-list": ["not"],
	},
	overrides: [
		{
			// 전역 스타일시트는 우리 클래스 문법 대상 제외
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
				// 외부 변수를 소비하는 파일에는 쓰지 않음, var() 사용까지 검사
				"custom-property-pattern": "^app-[a-z0-9-]+$",
			},
		},
	],
};
