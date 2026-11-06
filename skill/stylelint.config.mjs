/*
 * 예제 CSS 검사. css 08-01 규칙이 보여 주는 설정을 extends 로 그대로 읽음
 * 예제에만 필요한 예외만 여기서 더함
 */
export default {
	extends: ["./css/examples/tooling-configure-stylelint-to-enforce-these-rules/01-correct.js"],
	rules: {
		// 줄 표기 주석(`/* [!code ++] */`)이 표시할 줄 바로 위에 붙어야 해서 끔
		"comment-empty-line-before": null,
		// 예제는 라이브러리 변수(`--mui-shape-borderRadius`)를 소비하기도 함. 실제 설정은 token.css 에만 이 규칙을 둠
		"custom-property-pattern": null,
	},
	overrides: [
		{
			// 토큰을 선언하는 규칙의 예제. 실제 설정은 src/style/** 가 같은 예외
			files: ["**/values-*/*.css"],
			rules: {"property-disallowed-list": null},
		},
		{
			// 움직임 감소 전역 처리의 !important. 실제 설정은 src/style/** 가 같은 예외
			files: ["**/a11y-*/*.css"],
			rules: {"declaration-no-important": null},
		},
	],
};
