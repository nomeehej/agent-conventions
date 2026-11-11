# 섹션

이 파일은 Figma 컨벤션 규칙의 섹션 순서, 영향도, 설명을 정의합니다.
1~7절은 라이브러리 구성, 8~12절은 구현입니다.

## 1. Library File and Pages (file)
**TitleKo:** 라이브러리 파일과 페이지
**Lead:** 화면 파일과 나눈 라이브러리 파일, 페이지 기호, 코드 이름을 따른 부품 페이지, 같은 역할 부품 합치기
**Impact:** HIGH
**Description:** 부품 master는 라이브러리 파일 하나에 두고 화면 파일은 publish된 라이브러리를 받아 씁니다.
페이지 이름 앞 기호 하나가 페이지 종류를 말하고 ❖ 페이지 이름은 코드 부품 폴더 이름과 같습니다.
이름이 하나로 이어지면 Figma, 코드, Storybook을 이름 대조만으로 잇습니다.

## 2. Sections and Layers (layer)
**TitleKo:** 섹션과 레이어
**Lead:** master 묶음 섹션, 섹션 바로 아래 master, 문서용 부품과 보조 master 접두사, 역할 레이어 이름, variant 행렬, 예시 frame, 아래로 늘어나는 입력 master
**Impact:** HIGH
**Description:** ❖ 페이지는 깊이 하나하나가 읽기 쉬움을 정합니다.
섹션은 개발에 넘기는 master 묶음에만 쓰고 master는 감싸는 frame 없이 섹션 바로 아래에 둡니다.
레이어 이름은 코드 요소와 같은 역할 이름이고 variant는 이름표를 단 행렬로 놓습니다.

## 3. Component Properties (property)
**TitleKo:** 부품 속성
**Lead:** 공통 축 이름과 값과 순서, 바뀌는 것에 맞춘 속성 종류, 표시한 제안 상태, 행렬을 깨는 상태, ui master의 더미 글자
**Impact:** CRITICAL
**Description:** 속성 이름과 값은 코드 프롭과 story 이름의 기준입니다.
모든 master가 같은 축 이름, 값, 순서를 쓰고 바뀌는 것에 맞춰 속성 종류를 고릅니다.
코드에 없는 상태도 제안으로 표시해 그리고 모양이 행렬을 깨는 상태만 따로 master로 뺍니다.

## 4. Variables and Styles (variable)
**TitleKo:** 변수와 스타일
**Lead:** 변수와 스타일에 묶는 값, 코드 토큰을 따른 변수 이름과 scope
**Impact:** HIGH
**Description:** master의 색, 간격, 모서리, 글자, 효과는 변수와 스타일에 묶습니다.
변수는 역할 경로로 이름을 짓고 primitive 별칭, scope, 코드 토큰 이름의 Web 코드 문법을 답니다.

## 5. Notes and Descriptions (note)
**TitleKo:** 노트와 설명
**Lead:** 캔버스가 못 보여 주는 것만 쓰는 노트, 날짜를 단 노트와 정리, 용도와 코드 경로를 쓴 master 설명
**Impact:** MEDIUM
**Description:** 노트는 Figma만 봐서는 모르는 기획 변경, 알릴 것, 고민에만 답니다.
노란 노트는 작성자와 날짜를 달고 반영되면 지웁니다.
master 설명은 용도와 코드 경로를 싣고 목차 카드는 정해진 상태 말을 씁니다.

## 6. Versions and Release (release)
**TitleKo:** 버전과 배포
**Lead:** 라이브러리 번호 하나, Changelog 한 곳, node id를 지키는 제자리 고치기, publish 설명과 코드의 반영 버전
**Impact:** CRITICAL
**Description:** 버전은 라이브러리 전체에 번호 하나를 붙이고 기록은 `¶ Changelog` 한 곳에만 남깁니다.
master는 제자리에서 고쳐 화면 파일 인스턴스와 Storybook 링크가 가리키는 node id를 지킵니다.
publish 설명 첫 줄의 번호로 화면 파일과 코드가 반영한 판을 맞춥니다.

## 7. Plugin API Scripts (script)
**TitleKo:** Plugin API 스크립트
**Lead:** 공식 skill과 앞서는 이름 규칙, 한 담당의 차례 쓰기, Plugin API 함정, 코드와 story 측정에서 끌어낸 속성
**Impact:** HIGH
**Description:** `use_figma`로 라이브러리 파일에 쓸 때의 절차입니다.
Plugin API 문법은 공식 skill을 따르고 이름과 구조는 이 skill이 앞섭니다.
쓰기는 한 담당이 차례로 하고 알려진 함정을 먼저 확인합니다.
코드에서 master를 그릴 때는 코드와 Storybook 측정에서 속성을 끌어냅니다.

## 8. Reading Figma through MCP (read)
**TitleKo:** MCP로 Figma 읽기
**Lead:** 스크린샷과 메타데이터 먼저, 도구별 노드 선택, get_design_context 조건, 렌더 결과에서 읽는 문구, 숨긴 레이어와 메모
**Impact:** CRITICAL
**Description:** 어떤 도구를 어느 노드에 어떤 순서로 부를지 정합니다.
스크린샷과 메타데이터는 비용을 미리 가늠할 수 있습니다.
`get_design_context`는 레이어가 정리되지 않을수록 노드가 늘어 비싸집니다.
그래서 화면은 싼 도구로 먼저 읽습니다.
비싼 도구는 저장소에 대응물이 없는 가장 작은 노드에만 부릅니다.
레이어 이름과 숨긴 레이어처럼 파일 정리 상태에 따라 뜻이 달라지는 정보는 Figma 스크린샷과 대조해서 읽습니다.

## 9. Design Intent and Gaps (intent)
**TitleKo:** 디자인 의도와 빈자리
**Lead:** UX 메모와 GUI 불일치 질문, 그려지지 않은 상태, 표본으로 읽는 프레임 폭과 샘플 문구, 암시된 동작
**Impact:** HIGH
**Description:** Figma 화면은 한 시점의 표본입니다.
UX 메모와 GUI 화면이 어긋나는 곳은 구현 전에 묻습니다.
그려지지 않은 상태는 프로젝트 기본 컴포넌트로 채웁니다.
프레임 폭과 샘플 문구는 실제 데이터와 화면 폭이 달라질 수 있는 표본으로 읽습니다.
아이콘과 표시가 암시하는 동작을 구현합니다.

## 10. Source of Truth (source)
**TitleKo:** 값과 문구의 출처
**Lead:** 수치와 변수의 토큰 대응, 고정 문구와 서버 데이터
**Impact:** HIGH
**Description:** 생김새는 Figma에서 읽고 값은 저장소에서 가져옵니다.
간격, 색, 모서리 반경, 글꼴은 프로젝트 토큰으로 옮깁니다.
문구는 고정 문구와 서버 데이터로 나눠 출처를 정합니다.

## 11. Transcription (transcription)
**TitleKo:** 코드로 옮기기
**Lead:** 저장소 컴포넌트 우선, 레이어 구조 복제 금지, 아이콘과 에셋 출처, 라이브러리 속성을 옮긴 프롭과 story
**Impact:** CRITICAL
**Description:** 읽은 화면을 코드로 옮길 때 저장소 컴포넌트를 먼저 씁니다.
`get_design_context`가 돌려준 레이어 구조, 절대 좌표, 임시 에셋 URL은 옮기지 않고 의도만 CSS와 컴포넌트로 다시 씁니다.
라이브러리 master로 부품을 구현하면 속성 축은 프롭, 값은 story로 옮깁니다.

## 12. Verification and Report (verify)
**TitleKo:** 검증과 보고
**Lead:** 렌더 값 실측, 라이브러리 검사, 읽은 노드와 대응표와 남은 차이 보고
**Impact:** HIGH
**Description:** 일치를 주장하기 전에 실제 화면에서 렌더 값을 재고 판정 어휘로 보고합니다.
라이브러리만 고친 작업은 렌더 값 대신 검사 위반과 바뀐 섹션을 확인합니다.
보고에는 읽은 노드, 부른 도구, 대응시킨 컴포넌트, 남은 질문과 차이를 남겨
다음 사람이 같은 호출을 되풀이하지 않게 합니다.
