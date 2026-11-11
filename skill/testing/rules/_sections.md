# 섹션

이 파일은 테스트 컨벤션 규칙의 섹션 순서, 영향도, 설명을 정의합니다.

## 1. Test Scope and Ownership (scope)
**TitleKo:** 범위와 배치
**Lead:** 실행 경계 선택, 층별 책임과 연결 검증, 소유자별 배치와 러너 수집, smoke와 sanity 구분
**Impact:** HIGH
**Description:** 검증할 계약에 맞는 가장 작은 실행 범위를 고르고 층별 책임과 소유 위치를 정합니다.
프로젝트의 테스트 추가 정책과 러너 수집 경계를 유지합니다.

## 2. Scenarios and Expectations (case)
**TitleKo:** 시나리오와 기대값
**Lead:** 시나리오 표기, 상태와 경계값 선택, 구현과 독립된 기대값
**Impact:** HIGH
**Description:** integration, E2E 사례는 GIVEN, WHEN, THEN으로 조건, 행동, 결과를 드러내고 상태와 경계값을 선택합니다.
기대값은 검증 대상 구현과 독립된 계약에서 정합니다.

## 3. Test Data and Isolation (data)
**TitleKo:** 데이터와 격리
**Lead:** 작고 유효한 타입 기반 테스트 데이터, 시간과 환경 통제, 상태 격리와 복구
**Impact:** HIGH
**Description:** 유효한 입력의 핵심 필드를 명시하고 시간과 실행 환경을 통제합니다.
테스트가 바꾼 상태와 자원의 수명을 격리하고 복구합니다.

## 4. Vitest Assertions and Mocking (vitest)
**TitleKo:** Vitest 단언과 mock
**Lead:** matcher 선택, 비동기 완료, 대체할 경계와 실행할 대상
**Impact:** HIGH
**Description:** 값, 오류, 비동기 완료를 계약에 맞는 matcher로 확인합니다.
검증 대상은 실제로 실행하고 필요한 의존 경계만 대체합니다.

## 5. Playwright Browser Tests (playwright)
**TitleKo:** Playwright 브라우저 테스트
**Lead:** locator 선택, 상태 대기와 이벤트 등록 순서, fixture와 page object, 사전조건과 검증 여정
**Impact:** HIGH
**Description:** 의미와 범위가 분명한 locator로 준비된 화면을 조작합니다.
조건과 이벤트로 기다리고 fixture와 page object는 실제 반복 경계에 맞춥니다.

## 6. Network Boundaries (network)
**TitleKo:** 네트워크 경계
**Lead:** 응답 경계 교체, 미처리 요청 검출, 실제와 mock 경계 명시, 생성 계약 위의 도메인 builder와 handler, 브라우저와 Node 공유
**Impact:** HIGH
**Description:** 실제 화면 처리와 provider는 유지하며 응답 경계에서 필요한 상태를 만듭니다.
생성 계약과 도메인 builder를 조립해 브라우저와 Node가 함께 쓰고 미처리 요청을 검출합니다.

## 7. Golden and Visual Baselines (baseline)
**TitleKo:** 골든과 시각 비교
**Lead:** 안정된 기준값, 정규화 범위, 시각 비교 환경과 matcher 설정
**Impact:** HIGH
**Description:** 의미 있는 차이를 유지하는 작은 기준값을 검토합니다.
시각 비교의 렌더 환경, 안정화 조건, matcher 설정을 맞춥니다.

## 8. Verification and Reporting (verification)
**TitleKo:** 검증과 결과 보고
**Lead:** 회귀 테스트의 결함 검출 확인, 실행 범위와 실패 상태 보고
**Impact:** HIGH
**Description:** 회귀 테스트가 원래 결함을 검출하는지 확인하고 실행 범위를 기록합니다.
실패, 재시도 통과, 미실행과 커버리지의 측정 경계를 보존합니다.

## 9. Gallery Stories and Harnesses (story)
**TitleKo:** Gallery story와 harness
**Lead:** Playwright gallery의 story, 실제 provider로 상태 구성, 소비 테스트에서 검증
**Impact:** HIGH
**Description:** Playwright gallery의 story는 실제 화면과 provider로 구역의 재현 가능한 상태를 만들고 integration 테스트가 소비합니다.
브라우저 경계의 props, 콜백, 정리와 자동 단언의 책임을 구분합니다.

## 10. Component Tests (component)
**TitleKo:** 컴포넌트 테스트
**Lead:** Storybook Vitest addon의 story 실행, play 단언, 접근성 검사
**Impact:** HIGH
**Description:** 부품 하나를 story로 렌더해 props, 입력, 상호작용, 접근성을 Storybook Vitest addon으로 검증합니다.
모든 story가 렌더 테스트이고 play가 만든 상태는 같은 play에서 단언하며 접근성 위반은 실패로 봅니다.
