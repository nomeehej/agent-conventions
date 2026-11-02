---
title: Start with the Screenshot and Metadata
titleKo: Figma 노드는 스크린샷과 메타데이터부터 읽습니다
impact: CRITICAL
impactDescription: 한 화면을 읽는 비용을 레이어 정리 상태와 무관하게 예측할 수 있는 범위로 묶습니다
appliesWhen:
  - 요청에 Figma URL이나 노드 id가 있어 MCP로 디자인을 읽을 때
  - 같은 Figma 화면을 다시 읽거나 읽을 노드를 늘릴 때
requiresSelected: read-choose-the-node-each-tool-reads
tags: mcp, budget, screenshot, metadata
---

## Start with the Screenshot and Metadata

**Impact: CRITICAL (한 화면을 읽는 비용을 레이어 정리 상태와 무관하게 예측할 수 있는 범위로 묶습니다)**

Figma 노드는 `get_metadata`, `get_screenshot`, `get_variable_defs`를 먼저 부릅니다.
`get_design_context`는 마지막에 부르고, URL이 래퍼를 가리키면 `get_metadata`가 첫 호출입니다.
앞의 셋은 픽셀 수, 노드 수, 변수 수로 비용을 미리 가늠할 수 있습니다.
`get_design_context`는 레이어가 정리되지 않았을수록 같은 화면에서도 노드가 몇 배로 늘어납니다.
인자와 응답 필드 이름은 원격 서버 도구 스키마 기준입니다(2026년 9월 관측).

### 도구별 역할과 비용

| 도구 | 얻는 것 | 비용(LLM 토큰) |
| --- | --- | --- |
| `get_screenshot` | 시각 기준. 실제 문구, 색, 배치 | 픽셀 수에 비례합니다. 1600px 한 장이 약 3k입니다 |
| `get_metadata` | 노드 트리, 타입, 이름, 좌표, 크기, `hidden` | 노드당 약 35입니다. 노드 270개가 약 10k입니다 |
| `get_variable_defs` | 노드가 쓰는 변수 이름과 값 | 목록 항목 하나에 수백입니다. 화면 프레임은 그보다 큽니다 |
| `get_design_context` | 참고 코드, 실제 텍스트, 에셋 URL | 노드 수에 비례합니다. 같은 화면 전체가 Dev Mode 추정 약 63k입니다 |

측정값은 2026년 9월 Figma 공식 MCP 플러그인(`figma/mcp-server-guide`) 2.2 계열, 원격 서버에서 화면 하나로 잰 것입니다.
그러므로 수치보다 비례 관계를 기준으로 삼습니다.

### 호출 순서

1. URL에서 `fileKey`와 노드 id를 뽑습니다.
   노드 고르기는 `read-choose-the-node-each-tool-reads`가 정합니다.
2. `get_metadata`를 부릅니다.
3. `get_screenshot`을 `maxDimension: 1600`으로 부릅니다.
4. `get_variable_defs`를 부릅니다.
5. 스크린샷과 메타데이터에서 본 요소의 대응물을 찾습니다.
6. 대응물이 없는 요소만 `get_design_context`로 읽습니다.
   대상은 `read-call-design-context-only-on-small-unmatched-nodes`가 정합니다.

`get_screenshot` 응답은 수명이 짧은 URL입니다.
바로 내려받아 파일로 읽고, 셸로 받을 수 없을 때만 `enableBase64Response`를 켭니다.
레이어 이름과 스크린샷의 글자가 다르면 `read-take-copy-from-the-render-not-layer-names`를 따릅니다.

### 예산

한 화면의 목표는 LLM 토큰 20k 안이며, 화면 둘 이상에서 다시 재기 전까지는 잠정값입니다.
부르기 전에 스크린샷은 가로×세로÷750, 메타데이터는 노드 수×35로 어림합니다.
같은 노드를 같은 도구로 두 번 부르지 않고, 앞 응답에 필요한 값이 있으면 그 값을 씁니다.

| 상황 | 처리 |
| --- | --- |
| 스크린샷 `original_height`가 폭의 두 배를 넘는 긴 화면 | 1600px 한 장으로는 글자가 뭉개집니다. 메타데이터에서 구역 프레임 id를 찾아 구역마다 찍습니다 |
| 한 요청에 화면이나 기기 폭 프레임이 여럿 | 첫 화면에서 만든 컴포넌트 대응표, 토큰 대응표를 다음 화면에 그대로 쓰고 달라진 노드만 읽습니다 |
| 어림한 합계가 목표를 넘음 | 더 부르기 전에 멈추고, 이미 받은 응답으로 풀 수 있는지 다시 봅니다 |

**Incorrect 1 (화면 전체에 `get_design_context`를 먼저 부르고 성긴 응답을 코드로 강제합니다):**

<<< ../examples/read-start-with-screenshot-and-metadata/01-incorrect.txt

**Correct 1 (싼 도구로 화면을 읽고 대응물이 없는 노드 하나만 코드로 읽습니다):**

<<< ../examples/read-start-with-screenshot-and-metadata/02-correct.txt
