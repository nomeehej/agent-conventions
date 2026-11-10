---
title: Measure Rendered Values Before Claiming Parity
titleKo: 일치를 주장하기 전에 렌더 값을 실측합니다
impact: HIGH
impactDescription: 눈으로 대조해서는 놓치는 간격, 색, 빠진 상태를 수치로 확인하고 보고합니다
appliesWhen:
  - Figma 기준 구현이나 수정을 마무리하거나 완료로 보고할 때
requiredOnCompletion: true
tags: verify, parity, measurement
---

## Measure Rendered Values Before Claiming Parity

**Impact: HIGH (눈으로 대조해서는 놓치는 간격, 색, 빠진 상태를 수치로 확인하고 보고합니다)**

스크린샷을 눈으로 대조하면 1px 간격, 비슷한 회색, 빠진 상태를 놓칩니다.
실제 라우트에서 렌더 값을 읽어 대조 행마다 견줍니다.
수치로 확인한 행만 일치로 보고합니다.

### 재는 차례

1. 대조 행을 만듭니다.
   요소, 속성, 기대 값을 한 행에 두고 토큰이 있으면 그 이름도 적습니다.
   행은 이번 변경이 새로 만들거나 바꾼 요소의 속성 가운데 Figma에서 옮긴 값에만 만듭니다.
   설계 문서가 있는 화면은 그 문서가 Figma에서 옮기기로 적은 항목만 행으로 만듭니다.
   문서가 프로젝트 기본값에 맡긴 안쪽 간격, 글꼴 크기, 모서리 반경, 그림자는 행으로 만들지 않습니다.
   Figma 쪽 값을 `get_variable_defs`나 이미 받은 응답에서 얻지 못한 행은 `UNMEASURED`로 두고 보고에 남깁니다.
   그 행에는 `PASS`, `DRIFT`를 붙이지 않습니다.
   에셋은 로컬 파일이 비어 있지 않은지, 렌더 폭과 높이가 Figma 비율과 맞는지도 행으로 둡니다.
2. 실제 라우트를 열고 `getComputedStyle`, `getBoundingClientRect`로 값을 읽습니다.
3. 행마다 판정을 붙입니다.
4. 요청 범위 안의 차이만 고치고 다시 잽니다.
   범위 밖 차이는 고치지 않고 보고합니다.
   세 번 돌면 멈추고 남은 행은 그대로 보고합니다.

설계 문서의 재료로 Figma를 읽기만 했을 때처럼 코드를 바꾸지 않은 작업은 잴 값이 없습니다.
보고에 측정 대상 없음을 적고 끝냅니다.

값은 브라우저 자동화 도구의 페이지 평가로 읽습니다.
브라우저 스크린샷을 Figma 스크린샷 옆에 두고 배치와 누락을 봅니다.
이 대조가 수치 판정을 대신하지는 않습니다.

### 판정

```mermaid
flowchart LR
	q1{"요소가<br>있는가?"} -- 예 --> q2{"잴 수<br>있는가?"} -- 예 --> q3{"같은 상태,<br>변형인가?"} -- 예 --> q4{"있는<br>토큰을<br>썼는가?"} -- 예 --> q5{"Figma 값과<br>같은가?"} -- 예 --> r6("PASS")
	q1 -- 아니요 --> r1("MISSING")
	q2 -- 아니요 --> r2("UNMEASURED")
	q3 -- 아니요 --> r3("VARIANT")
	q4 -- 아니요 --> r4("HARDCODED")
	q5 -- 아니요 --> r5("DRIFT")
```

| 판정 | 뜻 |
| --- | --- |
| `PASS` | 렌더 값이 기대 값과 같고 그 값이 Figma 값과도 같습니다 |
| `DRIFT` | 토큰은 맞게 썼지만 토큰 값이 Figma 값과 다릅니다 |
| `HARDCODED` | 같은 용도의 프로젝트 토큰이 있는데 값을 직접 썼습니다 |
| `VARIANT` | 상태나 변형이 달라 비교 대상이 아닙니다. `DRIFT`보다 먼저 판정합니다 |
| `MISSING` | 요소나 상태가 화면에 없습니다 |
| `UNMEASURED` | 브라우저 쪽이나 Figma 쪽 값을 얻을 수단이 없어 재지 못했습니다. 이 행은 일치로 보고하지 않고 사람이 잴 수 있게 요소와 속성을 보고에 남깁니다 |

판정 어휘는 jeltehomminga/figma-design-skills의 `design-fidelity-verify`(MIT)에서 가져왔습니다.

**Incorrect 1 (눈으로 대조한 결과를 일치로 보고합니다):**

<<< ../examples/verify-measure-rendered-values-before-claiming-parity/01-incorrect.txt

**Correct 1 (렌더 값을 행마다 재고 판정을 붙입니다):**

<<< ../examples/verify-measure-rendered-values-before-claiming-parity/02-correct.txt
