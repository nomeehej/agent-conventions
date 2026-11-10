---
title: Require Header Boxes on React Hooks, Handlers, and Key Declarations
titleKo: React의 주요 경계 선언에 헤더 상자를 붙입니다
impact: MEDIUM
impactDescription: 공통 문서화 기준에 React 전용 선언을 추가해 누락을 막습니다
appliesWhen:
  - 쿼리, 뮤테이션 선언을 추가, 변경할 때
  - 분기, `await`, 쿼리 무효화, 화면 이동 같은 부수효과 호출이 있는 핸들러, 이펙트를 추가, 변경할 때
  - 내보낸 보조 함수, 훅, 스토어 선언을 추가, 변경할 때
requiresSelected: typescript/docs-require-header-boxes-on-key-declarations
reviewWith: typescript/types-document-custom-types-and-shapes
tags: docs, handlers, effects
---

## Require Header Boxes on React Hooks, Handlers, and Key Declarations

**Impact: MEDIUM (공통 문서화 기준에 React 전용 선언을 추가해 누락을 막습니다)**

`typescript/docs-require-header-boxes-on-key-declarations`의 필수 대상에 아래 React 선언을 추가합니다.
상자는 선언 바로 위에 둡니다.
모양과 낱말은 `typescript/docs-write-korean-comments-about-purpose-and-constraints`를 따릅니다.

| 추가 대상 | 조건 |
| --- | --- |
| 합성 컴포넌트 | 공개 부품 |
| 이벤트 핸들러, `useEffect` | 본문에 분기, `await`, 쿼리 무효화, 화면 이동, 저장 같은 부수효과 호출이 있음. 동작이 하나뿐이어도 포함합니다 |

**Incorrect 1 (주요 경계 선언에 의도 설명이 없습니다):**

<<< ../examples/docs-require-header-boxes-on-react-declarations/01-incorrect.ts

**Correct 1 (선언 의도를 바로 위 상자에 적습니다):**

<<< ../examples/docs-require-header-boxes-on-react-declarations/02-correct.ts
