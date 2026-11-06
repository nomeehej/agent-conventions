---
title: Show Regions as Marked Figma Figures
titleKo: 구역은 표시 붙인 Figma 그림으로 보여 줍니다
impact: HIGH
impactDescription: 긴 그림 한 장과 멀리 떨어진 번호 목록 대신 구역마다 그림과 부분 표를 붙여 읽게 하고 그림을 손으로 고치는 비용을 없앱니다
appliesWhen:
  - 설계 문서에서 화면 모양이나 질문 자리를 그림으로 보여 줄 때
  - 화면 목업을 HTML이나 표로 손수 그리려 할 때
  - Figma 판이 바뀌어 문서의 그림을 다시 뜰 때
tags: writing, figure, figma, capture
---

## Show Regions as Marked Figma Figures

**Impact: HIGH (긴 그림 한 장과 멀리 떨어진 번호 목록 대신 구역마다 그림과 부분 표를 붙여 읽게 하고 그림을 손으로 고치는 비용을 없앱니다)**

구역 절마다 그 구역의 Figma 그림 하나를 두고 부분 표의 `#`을 그림의 표시 번호와 맞춥니다.
설계 문서는 구현 전 문서라 그림의 정답은 Figma입니다. 앱 화면 캡처를 구역 그림으로 쓰지 않습니다.

| 자리 | 쓰는 법 |
| --- | --- |
| 그림 | for-humanity `fx-shot`. PNG 원본 위에 백분율 표시 상자와 번호, 오른쪽 위 표시 스위치 |
| 표시 | Figma node 경계에서 계산. 상자를 손으로 그리지 않음 |
| 만드는 법 | `figma-capture.mjs --md <문서> <저장 경로> <프레임> <1번 node> …`. `+` 붙은 node는 표시 없이 자르는 범위에만 |
| 파일 | `img/<화면>/figma-<구역>.png`. 질문 자리는 `img/<화면>/question-<번호>.png` |
| 다시 뜨기 | 명령 전부를 `Sources` 절 `:::details[Recapture figures]{open}`에 |
| 값 | 자리 예시. 모양 정답 = Figma |

토큰은 git 밖 파일에서 읽고 출력에 찍지 않습니다.
node 경계가 보이는 영역보다 크면 숨은 레이어 때문입니다. 그림을 보고 안쪽 node로 바꿉니다.
Figma에 없는 상태(대기, 빈 값, 실패)는 그 상태를 그린 Figma 프레임이 있을 때만 그림을 둡니다. 없으면 표로만 씁니다.

**Incorrect 1 (긴 캡처 한 장 아래에 번호 목록을 몰아 두어 구역의 설명과 그림이 멀어집니다):**

<<< ../examples/writing-show-regions-as-marked-figma-figures/01-incorrect.markdown

**Correct 1 (구역 절마다 표시 그림과 같은 번호의 부분 표를 붙입니다):**

<<< ../examples/writing-show-regions-as-marked-figma-figures/02-correct.markdown

**Correct (Figma 프레임을 받아 node 경계로 표시를 계산하고 문서의 그림을 바꿉니다. 프로젝트의 `script/blueprint/`에 복사합니다):**

<<< ../examples/writing-show-regions-as-marked-figma-figures/03-correct.mjs
