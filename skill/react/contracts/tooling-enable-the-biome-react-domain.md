# Enable the Biome React Domain

**Impact: MEDIUM (자동 검사 범위와 리뷰에서 판단할 범위를 구분합니다)**

`biome` 2.x의 `linter.domains`에서 `react`를 켭니다.
`package.json`에 `react@>=16`이 있을 때 React 검사가 적용됩니다.
기본 설정은 `typescript/tooling-configure-biome-to-enforce-these-rules`를 따릅니다.

### 도메인 검사와 추가 설정

| 검사 | 컨벤션 적용 범위 | 추가 설정, 리뷰 |
| --- | --- | --- |
| `correctness/noNestedComponentDefinitions` | `react/composition-do-not-define-components-inside-components`의 컴포넌트 정의 | 도메인 `recommended`에 없어 별도로 켭니다. JSX를 반환하는 지역 함수는 리뷰에서 확인합니다 |
| `correctness/useExhaustiveDependencies` | `react/state-use-effectevent-for-non-reactive-effect-callbacks`의 누락된 의존성 검사 | `useEffectEvent`로 분리할지는 리뷰에서 판단합니다 |
| `correctness/useJsxKeyInIterable` | `react/composition-name-fragments-explicitly`의 `key` 유무 | `<>` 대신 `Fragment`를 썼는지는 리뷰에서 확인합니다 |
| `style/noRestrictedImports` + `overrides` | `react/ownership-keep-component-imports-flowing-downward`의 레이어, 라우트 방향 | 아래 경로 설정을 추가합니다. 폴더 경계는 GritQL 플러그인이 검사합니다 |
| `plugins`의 GritQL 파일 | `react/ownership-keep-component-imports-flowing-downward`의 폴더 경계, `react/composition-create-components-only-when-required`의 파일 하나에 컴포넌트 하나 | 아래 두 파일을 등록합니다 |
| `style/useFilenamingConvention`의 `match` | `react/ownership-place-owner-files-in-role-folders`의 파일 이름 앞 `_` 금지 | 폴더 이름은 검사 대상이 아니라 역할 폴더는 통과합니다 |

### 접근성 검사

| `a11y/*` | 내용 |
| --- | --- |
| 컨벤션 적용 범위 | `react/a11y-give-interactive-elements-an-accessible-name`의 일부 |
| 켜는 곳 | 도메인이 아닌 `preset: "recommended"` |
| 리뷰 | 실제 접근 가능한 이름 |

`a11y` 검사는 `useButtonType`, `useAltText`, `useValidAnchor`, `useKeyWithClickEvents`,
`useSemanticElements`, `noStaticElementInteractions`, `useFocusableInteractive`를 포함합니다.

### 가져오기 경로 제한

| `noRestrictedImports` 적용 위치 | 차단할 경로 |
| --- | --- |
| `src/component/ui/**` | `@/component/widget/**`, `@/page/**` |
| `src/component/widget/**` | `@/page/**` |
| 각 `src/page/<route>/**` | `@/page/**`를 막고 `!@/page/<route>/**`로 자기 라우트만 허용합니다 |

라우트가 늘면 해당 `overrides`도 추가합니다.
`overrides`는 규칙 옵션을 통째로 바꾸므로 기본 설정의 경로 패턴을 각 항목에 함께 적습니다.
폴더 경계는 가져오는 파일의 위치에 따라 달라지므로 `noRestrictedImports`로 판정하지 못하고 GritQL 플러그인이 맡습니다.

### 폴더 경계와 파일 하나에 컴포넌트 하나

| 플러그인 | 잡는 것 | 통과하는 것 |
| --- | --- | --- |
| `no-outside-non-entry-import.grit` | 폴더 밖에서 `ui`, `widget`의 진입 파일이 아닌 파일, 화면 폴더의 `-page`, `-frame`이 아닌 파일을 가져옴 | 같은 폴더의 파일, 역할 폴더, `src` 밖의 테스트 |
| `one-component-per-file.grit` | 대문자 이름의 화살표 함수나 `NiceModal.create(…)` 선언이 한 파일에 둘 이상 | story 파일 |

다른 라우트의 역할 폴더는 위 라우트 `overrides`가 막습니다.
플러그인 `includes`는 `**/src/**`처럼 `**/`로 시작합니다.
Biome 2.5.15까지는 `src/**`로 적은 플러그인이 어느 파일에도 실행되지 않습니다.

`one-component-per-file.grit`는 화살표 함수와 `NiceModal.create`만 셉니다.
`memo`로 감싼 컴포넌트, 타입을 붙인 `const X: FC = …`, `function` 선언은 세지 않으므로 리뷰에서 확인합니다.

### 주석

JSX 자식 자리에 글자로 적은 `//`는 `preset: "recommended"`의 `suspicious/noCommentText`가 잡습니다.
`{/* */}` 주석과 `화면 구성` 상자는 대응 검사가 없습니다.
`react/docs-describe-jsx-blocks-above-the-return`에 따라 리뷰합니다.

### 켜지 않는 규칙

| 켜지 않는 규칙 | 이유 |
| --- | --- |
| `style/useFragmentSyntax` | `recommended`에 없으며 켜면 `Fragment`를 요구하는 `react/composition-name-fragments-explicitly`와 충돌합니다 |
| `style/useReactFunctionComponents` | 도메인 `all`에만 있고 클래스 컴포넌트만 검사합니다(`componentDidCatch`를 구현한 클래스는 예외). 이 컨벤션에 클래스 컴포넌트를 막는 규칙이 없어 켜지 않습니다 |

참고: [Biome 문서: 린터 도메인의 react 활성화와 규칙 목록](https://biomejs.dev/linter/domains/#react-activation),
[Biome: noNestedComponentDefinitions](https://biomejs.dev/linter/rules/no-nested-component-definitions/javascript/),
[Biome: noCommentText](https://biomejs.dev/linter/rules/no-comment-text/javascript/),
[Biome: useReactFunctionComponents](https://biomejs.dev/linter/rules/use-react-function-components/),
[Biome 문서: 린터 플러그인(GritQL)](https://biomejs.dev/linter/plugins/),
[Biome: useFilenamingConvention의 match](https://biomejs.dev/linter/rules/use-filenaming-convention/).

**Correct (도메인과 추가 검사를 켜고 레이어, 라우트 `overrides`를 설정합니다):**

```json
{
	"linter": {
		"enabled": true,
		"domains": {"react": "recommended"},
		"rules": {
			"preset": "recommended",
			"correctness": {"noNestedComponentDefinitions": "error"},
			"style": {
				"noRestrictedImports": {
					"level": "error",
					"options": {
						"patterns": [{"group": ["../**", "./**", "!./*.css"], "message": "Import with the absolute alias. Only a bare file import may use ./ for the same folder."}]
					}
				}
			}
		}
	},
	"overrides": [
		{
			"includes": ["src/component/ui/**"],
			"linter": {
				"rules": {
					"style": {
						"noRestrictedImports": {
							"level": "error",
							"options": {
								"patterns": [
									{
										"group": ["../**", "./**", "!./*.css"],
										"message": "Import with the absolute alias. Only a bare file import may use ./ for the same folder."
									},
									{
										"group": ["@/component/widget/**", "@/page/**"],
										"message": "ui must not import widget or page."
									}
								]
							}
						}
					}
				}
			}
		},
		{
			"includes": ["src/component/widget/**"],
			"linter": {
				"rules": {
					"style": {
						"noRestrictedImports": {
							"level": "error",
							"options": {
								"patterns": [
									{
										"group": ["../**", "./**", "!./*.css"],
										"message": "Import with the absolute alias. Only a bare file import may use ./ for the same folder."
									},
									{"group": ["@/page/**"], "message": "widget must not import page."}
								]
							}
						}
					}
				}
			}
		},
		{
			"includes": ["src/page/product-detail/**"],
			"linter": {
				"rules": {
					"style": {
						"noRestrictedImports": {
							"level": "error",
							"options": {
								"patterns": [
									{
										"group": ["../**", "./**", "!./*.css"],
										"message": "Import with the absolute alias. Only a bare file import may use ./ for the same folder."
									},
									{"group": ["@/page/**", "!@/page/product-detail/**"], "message": "Do not import the inside of another route."}
								]
							}
						}
					}
				}
			}
		}
	]
}
```

> 나머지 예시와 예외는 [full rule](../rules/13-01-tooling-enable-the-biome-react-domain.md)에 있습니다.
