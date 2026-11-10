---
title: Explain the Data Block Instead of Each Hook
titleKo: 훅마다 상자를 달지 않고 데이터 블록 위 상자 하나로 설명합니다
impact: MEDIUM
impactDescription: 컴포넌트 본문의 주석이 훅 수만큼 늘지 않고 데이터 흐름의 이유가 한곳에 모입니다
appliesWhen:
  - 컴포넌트 본문의 쿼리, 뮤테이션 바인딩을 추가, 변경할 때
  - 핸들러, 이펙트, 커스텀 훅, 합성 컴포넌트 부품을 추가, 변경하거나 그 위 주석을 고칠 때
requiresSelected: typescript/docs-put-boxes-on-groups-and-blocks
tags: docs, comments, hooks, handlers, effects
---

## Explain the Data Block Instead of Each Hook

**Impact: MEDIUM (컴포넌트 본문의 주석이 훅 수만큼 늘지 않고 데이터 흐름의 이유가 한곳에 모입니다)**

컴포넌트 본문의 쿼리, 뮤테이션 바인딩 묶음을 데이터 블록으로 보고 블록 첫 바인딩 위에 상자 하나를 둡니다.
요약 줄에는 무엇을 조회하고 요청하는지 적고 본문에는 블록 전체의 이유를 적습니다.
같은 쿼리 키를 쓰는 다른 구역, 무효화를 누가 맡는지, 다른 응답을 기다리는 순서처럼 파일 밖과의 관계가 그 이유입니다.
변수마다 줄을 나누지 않습니다.

| 자리 | 주석 |
| --- | --- |
| 데이터 블록 | 블록 첫 바인딩 바로 위 상자 하나. 바인딩마다 상자를 두지 않습니다 |
| 핸들러, 이펙트, 커스텀 훅, 합성 컴포넌트 부품 | 의무가 없습니다. 이름과 코드에 없는 사실이 있을 때만 상자를 둡니다 |
| 그 줄에만 해당하는 이유 | 그 줄 바로 위 `//` 한 줄. JSX 요소의 이유는 `docs-describe-jsx-blocks-above-the-return`이 정합니다 |
| 부르는 API 경로 | 적지 않습니다. 생성 훅 정의로 이동하면 보입니다 |

상자 자리의 공통 기준은 `typescript/docs-put-boxes-on-groups-and-blocks`가 정합니다.
상자 모양과 문장은 `typescript/docs-write-korean-comments-about-purpose-and-constraints`를 따릅니다.

참고: [Google 코드 리뷰 가이드: 주석](https://google.github.io/eng-practices/review/reviewer/looking-for.html#comments).

**Incorrect 1 (바인딩마다 상자를 달아 블록의 이유가 흩어집니다):**

<<< ../examples/docs-explain-the-data-block-not-each-hook/01-incorrect.ts

**Correct 1 (데이터 블록 위 상자 하나에 블록 전체의 이유를 모읍니다):**

<<< ../examples/docs-explain-the-data-block-not-each-hook/02-correct.ts

**Incorrect 2 (핸들러와 이펙트마다 이름과 코드를 옮긴 상자를 답니다):**

<<< ../examples/docs-explain-the-data-block-not-each-hook/03-incorrect.ts

**Correct 2 (상자를 지우고 코드에 없는 사실만 그 줄 위 `//` 한 줄로 남깁니다):**

<<< ../examples/docs-explain-the-data-block-not-each-hook/04-correct.ts
