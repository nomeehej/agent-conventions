---
title: Report What Was Read, Decided, and Left Open
titleKo: 보고에 읽은 노드, 대응표, 남은 질문과 차이를 남깁니다
impact: MEDIUM
impactDescription: 다음 사람이 같은 MCP 호출을 되풀이하지 않고 확인할 곳을 바로 찾습니다
appliesWhen:
  - Figma 기준 작업의 결과를 보고하거나 넘겨줄 때
requiredOnCompletion: true
tags: verify, report, handoff
---

## Report What Was Read, Decided, and Left Open

**Impact: MEDIUM (다음 사람이 같은 MCP 호출을 되풀이하지 않고 확인할 곳을 바로 찾습니다)**

Figma 기준 작업의 보고는 아래 항목을 이 순서로 담습니다.
한 줄 보고로는 무엇을 읽고 무엇을 가정했는지 다음 사람이 알 수 없습니다.

| 항목 | 내용 |
| --- | --- |
| 읽은 노드 | 도구마다 부른 노드 id와 어림 LLM 토큰 수 |
| 컴포넌트 대응표 | Figma 요소와 대응물. 새로 만든 마크업과 그 이유 |
| 토큰 대응표 | Figma 변수와 프로젝트 토큰. 값이 다른 토큰 |
| `get_design_context` | 부른 노드와 이유 |
| 출처 | 서버 데이터로 둔 값, 고정 문구로 둔 글자. 레이어 이름이나 메모와 다른 글자와 그 두 값 |
| 채운 상태 | 디자인에 없어 프로젝트 기본 컴포넌트로 채운 상태. Figma에 없어 기본값으로 정한 긴 값 처리 |
| 질문 | 어긋난 메모와 화면, 조건을 모르는 숨긴 레이어, 가정한 문구, 목적지를 모르는 링크, 맞는 응답 필드가 없는 글자, 답 없이 고른 쪽과 근거 |
| 차이 | `verify-measure-rendered-values-before-claiming-parity` 판정 중 `PASS`가 아닌 행. `UNMEASURED`도 여기에 둡니다 |

비어 있는 항목도 지우지 않고 "없음"으로 둡니다.
없다는 사실도 확인한 결과입니다.

**Incorrect 1 (무엇을 읽고 가정했는지 남기지 않습니다):**

<<< ../examples/verify-report-reads-decisions-and-gaps/01-incorrect.txt

**Correct 1 (읽은 것, 정한 것, 남은 것을 항목별로 남깁니다):**

<<< ../examples/verify-report-reads-decisions-and-gaps/02-correct.txt
