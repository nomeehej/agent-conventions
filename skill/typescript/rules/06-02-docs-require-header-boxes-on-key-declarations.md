---
title: Require Header Boxes on Key Declarations
titleKo: 경계가 되는 선언에는 헤더 상자를 붙입니다
impact: MEDIUM
impactDescription: 구현을 읽기 전에 중요한 경계를 찾고 설명할 수 있습니다
appliesWhen:
  - 쿼리, 뮤테이션, 원격 함수, 커스텀 훅, 스토어, 포매터 선언을 추가, 변경할 때
  - 분기, `await`, 쿼리 무효화, 화면 이동, 저장 같은 부수효과 호출이 있는 핸들러와 이펙트를 추가, 변경할 때
  - 다시 쓰거나 내보낸 보조 함수를 추가, 변경할 때
requiresSelected: docs-write-korean-comments-about-purpose-and-constraints
tags: docs, comments, declarations, boundaries
---

## Require Header Boxes on Key Declarations

**Impact: MEDIUM (구현을 읽기 전에 중요한 경계를 찾고 설명할 수 있습니다)**

중요한 선언에는 구현을 읽기 전에 역할과 경계를 알 수 있도록 바로 위에 헤더 상자를 둡니다.
빈 상자나 영문 제목만으로는 요구를 충족하지 못하며 실제 한국어 설명이 필요합니다.
헤더에는 이름을 옮기지 않고 이름에 없는 형식, 단위, 범위, 부수효과, 엔드포인트를 적습니다.
상자 모양과 낱말은 `docs-write-korean-comments-about-purpose-and-constraints`가 정합니다.

| 헤더 상자 대상 | 조건 |
| --- | --- |
| 이름 붙인 쿼리, 뮤테이션, 원격 함수, 커스텀 훅, 스토어 | 모두 작성합니다 |
| 포매터 | 표시 문자열을 만들 때 작성합니다 |
| 핸들러, 이펙트 | 본문에 분기, `await`, 쿼리 무효화, 화면 이동, 저장 같은 부수효과 호출 중 하나라도 있으면 작성합니다 |
| 보조 함수 | 재사용하거나 내보내면 작성합니다 |
| 커스텀 `type`, `interface` | 내보내기 여부와 무관하게 `types-document-custom-types-and-shapes`를 따릅니다 |
| 파일 위 상수 | 이름에 없는 단위, 범위, 출처가 있으면 작성합니다. 이어진 상수 묶음은 상자 하나에 상수마다 정의 목록 한 줄을 씁니다 |

**Incorrect 1 (주요 선언에 헤더 설명이 없습니다):**

<<< ../examples/docs-require-header-boxes-on-key-declarations/01-incorrect.ts

**Correct 1 (선언 바로 위 상자에 이름에 없는 정보를 적습니다):**

<<< ../examples/docs-require-header-boxes-on-key-declarations/02-correct.ts
