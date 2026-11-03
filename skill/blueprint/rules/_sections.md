# 섹션

이 파일은 Blueprint 설계 문서 컨벤션 규칙의 섹션 순서, 영향도, 설명을 정의합니다.

## 1. Materials and Truth (material)
**TitleKo:** 재료와 정답
**Lead:** 재료 정답표, 항목별 대조, UX로 읽는 Figma, 캡처로 확인하는 응답 모양
**Impact:** CRITICAL
**Description:** 설계 문서에 들어가는 재료는 Figma, 기획 데모, API spec, 코드, 캡처입니다.
무엇이 무엇의 정답인지 먼저 표로 정하고, 재료가 서로 어긋나는 항목은 종류별 정답으로 확정하거나 질문으로 남깁니다.
Figma는 UX 안으로 읽고, 응답 모양은 spec이 아니라 캡처로 확인합니다.

## 2. Decisions and Questions (question)
**TitleKo:** 결정과 질문
**Lead:** 화면 문서의 카드와 프로젝트에 하나인 번호, 선택지와 추천 하나, 남의 답이 필요한 것만, BE 카드의 그림, 그 자리에서 닫기
**Impact:** CRITICAL
**Description:** 질문 카드는 그 화면 문서의 Questions 절에 두고 번호는 프로젝트 안에서 하나로 씁니다. `questions.md`는 화면별 목록입니다.
카드는 대상 표, 선택지와 추천 하나, 이유 한 줄로 짧게 쓰고, 남의 답이 필요한 것만 남깁니다.
BE 카드에는 표시 그림을 붙이고, 닫을 때는 카드를 지우지 않고 그 자리에서 결정과 결과로 고쳐 씁니다.

## 3. Document Structure (structure)
**TitleKo:** 문서 짜임
**Lead:** 다섯 종류 문서, 두 독자 순서, 코드가 정본인 값, 본문과 변경 문서 분리, 지도 역할의 overview, 여러 화면이 쓰는 동작
**Impact:** HIGH
**Description:** 문서는 overview, shared, questions, 화면, 변경 다섯 종류입니다.
화면 문서는 머리(`Overview`, `Plan`, `Questions`) 뒤에 `Screen`, `Structure`, `Check`, `Reference` 부분을 두어 사람은 위를 읽고 구현하는 쪽은 아래까지 읽습니다.
본문은 늘 지금의 정답만 담고, 변경은 변경 문서로 받아 반영 뒤 본문을 고쳐 씁니다. 두 화면 이상이 쓰는 동작은 `shared.md`에 한 번만 적습니다.

## 4. Writing (writing)
**TitleKo:** 글
**Lead:** 개조식 한 줄 한 사실, 영어 라벨과 한국어 설명, 줄 끝 출처와 Figma 링크, Mermaid와 text 나무, 표시 붙인 Figma 그림
**Impact:** HIGH
**Description:** 개조식으로 한 줄에 한 사실만 쓰고, 라벨은 영어, 설명은 한국어로 씁니다.
출처는 줄 끝이나 표의 마지막 칸에 두고 Figma 노드는 아이콘과 번호를 링크로 적습니다.
흐름은 Mermaid, 나무는 주석 단 text 블록, 구역은 표시 붙인 Figma 그림으로 보여 줍니다.

## 5. Stages and Gates (stage)
**TitleKo:** 단계와 관문
**Lead:** Plan의 관문 있는 단계 표, 확인 명령으로 보고, 상태 표와 시나리오 표에서 뽑는 검사
**Impact:** HIGH
**Description:** 구현은 화면 문서의 Plan 절에 준비, 구역, 연동, 검증 단계로 나누고 막는 질문이 있는 단계만 Blocked로 둡니다.
완료는 확인 명령의 결과로 보고하고 Plan 표를 갱신합니다.
검사는 구현 전에 Scenarios 표로 적고 상태 표와 Mock 경우 표가 시나리오 ID로 가리키며, 스크립트가 문서와 테스트 제목을 대조합니다.

## 6. Verification (verify)
**TitleKo:** 확인
**Lead:** 넘기기 전 사이트 빌드, 옮기고 고칠 때 사실 대조
**Impact:** HIGH
**Description:** 설계 문서를 넘기기 전에 사이트를 빌드해 링크, 번호, 추천, 문체를 검사합니다.
문체를 바꾸거나 절을 옮길 때는 옛 판과 사실을 대조합니다.
