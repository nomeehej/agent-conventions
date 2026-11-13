---
title: Configure Biome to Enforce the Mechanical Rules
titleKo: Biome 설정으로 자동 검사할 규칙을 명시합니다
impact: MEDIUM
impactDescription: 자동 검사와 리뷰의 역할을 구분해 판단이 필요한 내용에 집중합니다
appliesWhen:
  - 프로젝트에 `biome` 설정을 처음 넣거나 lint 규칙을 바꿀 때
  - `biome.json`의 `linter.rules`에 항목을 추가, 삭제할 때
tags: tooling
---

## Configure Biome to Enforce the Mechanical Rules

**Impact: MEDIUM (자동 검사와 리뷰의 역할을 구분해 판단이 필요한 내용에 집중합니다)**

### 설정이 담당하는 것

기계적으로 판정할 수 있는 규칙은 아래 Biome 설정으로 검사합니다.
의미 판단은 리뷰에서 확인합니다.

| Biome 규칙 | 담당 컨벤션 |
| --- | --- |
| `style/noEnum`, `style/useAsConstAssertion` | `typescript/types-replace-enum-with-as-const-objects` |
| `style/noRestrictedImports` | `typescript/naming-import-by-absolute-path`. 심볼 없는 상대경로 예외는 `./*.css` 패턴으로 근사합니다 |
| `style/useNamingConvention`, `style/useFilenamingConvention` | `typescript/naming-use-consistent-file-and-symbol-naming`의 심볼, 파일 표기 |
| `style/useConsistentArrowReturn`의 `style: "asNeeded"` | `typescript/functions-declare-functions-as-arrow-consts`의 식 본문. 식 하나만 돌려주는 블록 본문을 고칩니다 |
| `style/noParameterAssign`, `style/useConst`, `style/noNestedTernary` | `typescript/functions-avoid-imperative-assembly-in-wide-scopes`의 재할당, 중첩 삼항 제한 |
| `correctness/noUnusedFunctionParameters` | `typescript/types-mark-unused-parameters-with-underscore` |
| `complexity/useMaxParams` | `typescript/functions-use-named-object-params-for-complex-signatures`. 라이브러리 콜백이 매개변수를 다섯까지 넘기므로 `max`는 5입니다 |
| `style/noMagicNumbers` | `typescript/values-declare-meaningful-numbers` |
| `suspicious/noExplicitAny`, `style/noNonNullAssertion` | `typescript/types-narrow-unknown-instead-of-asserting` |
| `plugins`의 GritQL 파일 | `typescript/absence-expose-optional-values-instead-of-silent-fallbacks`의 `??`, `\|\|` 오른쪽 리터럴과 이어진 `??`. `[]`와 조회 바로 뒤의 `0`, `""`는 통과합니다 |

`typescript/naming-use-direct-imports-and-public-entry-points`의 가져오기, 이름 붙인 내보내기, 배럴 제한은
아래 규칙이 담당합니다.

- `style/useImportType`
- `style/noDefaultExport`
- `performance/noNamespaceImport`
- `performance/noBarrelFile`
- `performance/noReExportAll`

기본 매개변수, 삼항, 음수 리터럴(`?? -1`), 템플릿 리터럴, 문자열 연결의 대체값은 GritQL 검사 밖이므로 리뷰합니다.
빈 값이 없을 때도 사실인지와 이어진 `||`도 리뷰합니다.
`recommended`에 이미 든 규칙도 담당 컨벤션을 드러내려고 설정에 명시합니다.

### 리뷰가 담당하는 것

| 대상 | 도구 한계 | 처리 |
| --- | --- | --- |
| 모듈 `const`, 객체 키의 역할 | 허용된 `snake_case`는 불변 데이터 상수와 그 키에만 적용됨 | 함수, 스키마, 요청 객체와의 구분은 리뷰합니다 |
| 허용된 `PascalCase`의 용도 | 합성 컴포넌트의 `{Root, Header, Footer}`와 컴포넌트 선언 때문에 허용됨 | 일반 함수, 지역 변수의 `camelCase`는 리뷰합니다 |
| 폴더 이름 | 단수 `kebab-case`는 파일 이름 검사 대상이 아님 | 리뷰합니다 |
| `const` 화살표 선언 자체 | `function` 선언을 막는 규칙이 없음 | `typescript/functions-declare-functions-as-arrow-consts`에 따라 리뷰합니다 |
| 넓은 스코프에서 `push`로 누적 | `useConst`는 재할당만 확인함 | 리뷰합니다 |
| 선언 초기값, 객체 속성 값, 기본 매개변수의 정책 숫자 | `noMagicNumbers`가 검사에서 제외함 | 리뷰합니다 |
| `10`, `24`, `60` 같은 허용 목록 숫자 | 정책 숫자여도 통과함 | 리뷰합니다 |
| 객체 구조분해 | 대응 검사가 없음 | `typescript/values-read-objects-through-chains`에 따라 리뷰합니다 |
| `.sort(` 호출 | 대응 검사가 없음 | `typescript/values-prefer-immutable-array-sorting`에 따라 리뷰합니다 |
| 사용하지 않는 매개변수를 아예 생략 | 검사는 남겨 둔 매개변수만 봄 | 리뷰합니다 |
| 매개변수가 넷이나 다섯인 직접 선언한 함수 | `useMaxParams`의 `max`가 라이브러리 콜백에 맞춰 5임 | 객체 매개변수로 묶었는지 리뷰합니다 |
| `as`, `@ts-expect-error` | 의도를 구분하지 못함 | 위의 타입 좁히기 규칙에 따라 리뷰합니다 |
| 블록 주석 `/* */`, `/** */`, 주석 상자 모양 | Biome에 주석 모양 규칙이 없음 | `typescript/docs-write-comments-about-purpose-and-constraints`에 따라 리뷰합니다 |
| `config/env.ts` 밖의 `import.meta.env`, `process.env` | 대응 검사가 없음 | `typescript/naming-read-environment-values-through-config-env`에 따라 리뷰합니다 |

ESLint를 함께 쓰는 프로젝트는 `@stylistic/multiline-comment-style`을 `separate-lines`, `checkJSDoc: true`로 켭니다.
여러 줄 블록 주석과 JSDoc을 `//` 줄 주석으로 바꾸게 하지만 한 줄 `/* */`와 상자 모양은 보지 않아 리뷰합니다.

### 설정 예외

| 설정 예외 | 적용 범위와 이유 |
| --- | --- |
| 테스트의 `noMagicNumbers` 해제 | Vitest의 `*.test.ts`와 Playwright의 `*.spec.ts`에서 리터럴 자체가 기대 계약인 값에 적용합니다. 설정값끼리 비교하도록 바꾸지 않습니다. 소스가 이미 이름 붙인 값은 테스트도 가져다 씁니다 |
| 도구 설정 파일의 `noDefaultExport` 해제 | `vite.config.ts`처럼 도구가 `default`를 요구하는 진입점에 적용합니다. 내보내기 규칙의 예외를 설정에 반영합니다 |

참고: [ESLint Stylistic 문서: multiline-comment-style](https://eslint.style/rules/multiline-comment-style),
[Biome 문서: 린터 플러그인(GritQL)](https://biomejs.dev/linter/plugins/).

**Correct (컨벤션 항목을 설정으로 고정합니다):**

<<< ../examples/tooling-configure-biome-to-enforce-these-rules/01-correct.json

**Correct (`??`, `||` 오른쪽 리터럴과 이어진 `??`는 GritQL 플러그인으로 잡습니다):**

<<< ../examples/tooling-configure-biome-to-enforce-these-rules/02-correct-1.json

<<< ../examples/tooling-configure-biome-to-enforce-these-rules/02-correct-2.grit
