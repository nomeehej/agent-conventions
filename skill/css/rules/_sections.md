# 섹션

이 파일은 CSS 컨벤션 규칙의 섹션 순서, 영향도, 설명을 정의합니다.

## 1. Class Naming and Syntax (naming)
**TitleKo:** 클래스 이름과 문법
**Lead:** 일반 CSS 선택, BEM 문법, 역할 이름, 화면 블록 이름
**Impact:** MEDIUM
**Description:** 일반 `*.css`를 사용하고 전역에서 고유한 클래스 이름을 붙입니다.
클래스 이름은 소유자와 역할을 드러냅니다.
요소와 수정자는 정해진 문법으로 구분합니다.

## 2. Ownership and Boundaries (ownership)
**TitleKo:** 소유와 경계
**Lead:** 파일당 블록 이름 하나, 다른 소유자 클래스의 범위, 소유자 API로 바꾸기
**Impact:** CRITICAL
**Description:** CSS 파일마다 소유자를 정하고 다른 소유자의 스타일을 사용할 때 지킬 범위를 명시합니다.
외부 라이브러리 DOM은 소유한 루트 아래에서만 선택해 다른 화면에 영향을 주지 않습니다.

## 3. Class Composition in TSX (composition)
**TitleKo:** TSX 클래스 조합
**Lead:** clsx 조합, 수정자의 쓰임, 기본과 상태 분리, 외부 클래스 진입점, 래퍼 요소 금지, 인라인 style 금지, 조건 수정자
**Impact:** HIGH
**Description:** TSX에서 클래스를 조합하는 방법과 UI 래퍼가 허용하는 스타일 범위를 정합니다.
클래스의 책임과 수정자로 표현할 변형을 구분합니다.
시각적 표현은 인라인 `style` 대신 클래스로 지정합니다.

## 4. Selectors and Declaration Placement (selector)
**TitleKo:** 선택자와 선언 배치
**Lead:** 한 겹 중첩, 클래스 선택자, 쉼표 묶기 금지, 한 블록, 가상 클래스와 수정자 구분, :not 금지
**Impact:** HIGH
**Description:** 선택 대상은 클래스 이름으로 명시합니다.
각 클래스의 선언은 한 블록에 모읍니다.
브라우저가 제공하는 DOM 상태는 가상 클래스로, 앱이 정의한 상태는 수정자 클래스로 표현합니다.

## 5. Design Tokens (values)
**TitleKo:** 디자인 토큰
**Lead:** var 대체값, 전역 토큰, z-index 층, 테마 전환, 쓰임으로 짓는 이름
**Impact:** HIGH
**Description:** 여러 파일이 공유하는 값은 전역 토큰으로 정의하고 사용처에서는 토큰 이름을 참조합니다.
`z-index` 순서와 테마 값도 토큰으로 관리해 변경할 곳을 한곳에 모읍니다.

## 6. Layout and Responsiveness (layout)
**TitleKo:** 레이아웃과 반응형
**Lead:** @media 위치, 데스크톱 퍼스트 세 값, 배치 의도 드러내기, 고유 크기 지정
**Impact:** MEDIUM
**Description:** 클래스 이름과 선언에 배치 의도를 드러냅니다.
폭에 따른 변경은 한곳에 모읍니다.
브레이크포인트를 추가하기 전에 고유 크기 지정으로 해결할 수 있는지 확인합니다.
뷰포트 브레이크포인트는 파일 아래 한곳에 모으고 데스크톱 퍼스트로 정한 세 값만 씁니다.
컴포넌트가 받은 폭에 따라 구조를 바꿔야 하면 컨테이너 쿼리를 씁니다.

## 7. Accessibility and Motion (a11y)
**TitleKo:** 접근성과 움직임
**Lead:** 포커스 표시, keyframes 이름과 prefers-reduced-motion
**Impact:** CRITICAL
**Description:** 키보드 포커스를 눈으로 확인할 수 있고 움직임에 민감한 사용자도 이용할 수 있어야 합니다.
포커스 표시는 없애지 않고 형태로 구분합니다.
애니메이션은 전역 이름을 겹치지 않게 두고 사용자 설정을 따릅니다.

## 8. Comments (docs)
**TitleKo:** 주석
**Lead:** 줄마다 닫는 주석, 상자 모양
**Impact:** MEDIUM
**Description:** CSS 주석은 줄마다 `/* */`로 닫고 여러 줄 블록 주석을 쓰지 않습니다.
설명이 두 줄 이상이면 TypeScript 주석과 폭이 같은 상자로 씁니다.

## 9. Tooling (tooling)
**TitleKo:** 도구 설정
**Lead:** stylelint로 자동 검사할 규칙
**Impact:** MEDIUM
**Description:** 자동 검사할 항목은 stylelint로 설정합니다.
도구가 판단하지 못하는 항목은 리뷰에서 확인합니다.
