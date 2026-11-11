# 섹션

이 파일은 Storybook 컨벤션 규칙의 섹션 순서, 영향도, 설명을 정의합니다.

## 1. Setup (setup)
**TitleKo:** 설정
**Lead:** 부품 story 수집과 쓰는 addon, 앱 provider 데코레이터, 빌드에서 뺄 env와 API 주소, 사이드바 정렬
**Impact:** HIGH
**Description:** `.storybook/` 설정은 부품 story만 모으고 앱과 같은 provider 안에서 렌더합니다.
빌드에는 렌더에 필요한 별칭과 플러그인만 싣고 사이드바는 Figma 라이브러리와 같은 차례로 둡니다.

## 2. Story Files (file)
**TitleKo:** story 파일과 이름
**Lead:** 부품 옆 story 파일 하나, Figma 부품 페이지 이름의 title, Figma 속성 값의 export 이름
**Impact:** HIGH
**Description:** story 파일은 부품마다 하나를 부품 폴더에 둡니다.
`title`과 export 이름은 Figma 라이브러리의 부품 페이지 이름과 속성 값을 그대로 씁니다.
Figma, 코드, Storybook을 이름 하나로 잇습니다.

## 3. Writing Stories (story)
**TitleKo:** story 작성
**Lead:** satisfies로 쓴 meta와 기본 args, args와 beforeEach와 play의 차례, Figma 값마다 story, 부모 문맥 재현
**Impact:** HIGH
**Description:** meta는 타입 검사를 받는 기본값을 들고 story는 바꾼 값만 둡니다.
상태는 가장 가벼운 수단으로 만들고 Figma 속성 값마다 story를 하나 이상 둡니다.
부모 폭은 실제 부모 CSS 값을 옮겨 재현합니다.

## 4. Design Links (design)
**TitleKo:** design 링크
**Lead:** story마다 variant 노드 링크, 표에서 다시 쓰는 링크, Figma 속성과 프롭의 대응
**Impact:** HIGH
**Description:** story마다 같은 상태의 Figma 노드를 `parameters.design`으로 잇습니다.
링크는 story id와 노드 id 표에서 도구로 쓰고 Figma와 이름이 다른 프롭은 meta 위 상자에 대응을 적습니다.

## 5. Docs and Version (docs)
**TitleKo:** 문서와 버전
**Lead:** Figma 라이브러리에 두는 사용 지침, Storybook 제목의 반영 버전
**Impact:** MEDIUM
**Description:** Storybook은 코드의 지금 모습을 보여 주고 사용 지침은 Figma 라이브러리에 둡니다.
코드에 반영한 라이브러리 버전을 Storybook 제목에 보입니다.

## 6. Verification (verify)
**TitleKo:** 검증과 보고
**Lead:** Storybook 빌드, story 테스트의 실행 수와 실패, 빠진 design 링크
**Impact:** HIGH
**Description:** 완료로 보고하기 전에 Storybook을 빌드하고 story 테스트를 돌립니다.
실행 수, 실패, 빠진 design 링크를 숫자로 보고합니다.
